const User = require('../models/user');
const config = require('../config/config');
const Contact = require('../models/contact');
const jwt = require('jsonwebtoken');
const redis = require('redis');
const bcrypt = require('bcryptjs');

const client = redis.createClient(6379, config.host);
client.on('connect', () => {
    console.log('redis client connected');
})
client.on('error', (err) => {
    console.error('Error: No connection');
})

function checkValidToken(user) {
    return new Promise((resolve, reject) => {
        client.get(`token${user}`, (error, result) => {
            error == null ? resolve(result) : reject(error);
        })
    })
}
exports.register = (req, res) => {
    console.log(`${req.method} ${req.baseUrl}`);
    const username = req.body.username;
    User.getUserByStdID(username)
        .then(user => {
            if (user) {
                res.send({ message: `${user.username} has been exist, choose new username` });
            }
            else {
                let rights = ['notification', 'user-profile', 'time-table', 'dashboard', 'student-list'];
                (req.body.roles.indexOf('admin') === 0 || req.body.roles.indexOf('root') === 0) ? (rights = rights) : (rights = ['notification', 'user-profile', 'time-table'])
                const data = {
                    username: req.body.username,
                    class: req.body.class,
                    name: req.body.name,
                    password: req.body.password,
                    roles: req.body.roles,
                    rights: rights
                };
                User.createUser(data)
                    .then(newUser => {
                        const contact = {
                            student: newUser._id,
                            address: req.body.address,
                            phone: req.body.phone,
                            email: req.body.email,
                        }
                        Contact.create(contact)
                            .then(contactUser => {
                                return res.send({ roles: newUser.roles, rights: newUser.rights });
                            })
                    })
            }
    })
}
exports.login = (req, res) => {
    console.log(`User ${req.body.username} login at ${Date.now()}`);
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByStdID(username)
        .then(user => {
            if (user) {
                User.comparePassword(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const payload = {
                                username: user.username,
                                roles: user.roles
                            };
                            let token = jwt.sign(payload, config.jwtSecret, { expiresIn: 60 * 5 });
                            let jsRes = { user: user.username, access_token: token };
                            res.json(jsRes);
                        }
                        else {
                            res.status(404).send({ 'message': 'Invalid Password' });
                        }
                    })
                    .catch(err => {
                        res.send(json(err))
                    })
            }
            else {
                res.status(404).send({ 'message': 'Invalid User' });
            }
        })
}
exports.logout = (req, res) => {
    const user = req.body.username;
    const token = req.body.token;
    client.setex(`token${user}`, 300, token , (err, result) => {
        if (err) res.json(err);
        else res.status(200).json({ 'message': `Token of user ${user} is added in blacklist` });
    });
}
exports.changePasswd = (req, res) => {
    const username = req.body.username;
    const oldPasswd = req.body.password;
    const newPass = req.body.newPassword;
    const verifyPasswd = req.body.verifyPass;
    const token = req.headers['x-access-token'] || req.body.token;
    let passHash;
    if (newPass != verifyPasswd) return res.send({ message: 'Check your verify new password' });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPass, salt, (error, hash) => {
            passHash = hash;
        });
    })
    checkValidToken(username)
        .then(result => {
            if (result === token) {
               return res.send({ message: 'Invalid token !!!' });
            }
            else {
                User.getUserByStdID(username)
                    .then(user => {
                        if (user) {
                            User.comparePassword(oldPasswd, user.password)
                                .then(isMatch => {
                                    if (isMatch) {
                                        User.updateByUsername({ username: user.username }, { password: passHash })
                                            .then(userUpload => {
                                                if (userUpload) {
                                                    client.setex(`token${user.username}`, 300, token);//set invalid token after user changed pass
                                                    res.status(200).send({ message: 'Change password successfully!' });
                                                }
                                                else {
                                                    res.status(404).send({ message: 'Some Error' })
                                                }
                                            })
                                            .catch(err => {
                                                res.send(JSON.stringify(err));
                                            })
                                    }
                                    else {
                                        res.send({ message: 'Invalid password, please type your old password' });
                                    }
                                })
                                .catch(err => {
                                    throw err;
                                })
                        }
                    })
                    .catch(err => {
                        res.status(404).send({ message: 'Some Error when getUserbyID' });
                    })
            }
        }).catch(err => {
            return res.status(404).send({ message: 'Some error with your token' });
    })

}
exports.users = (req, res) => {
    const token = req.body.token || req.headers['x-access-token'];
    const user = req.body.username;
    checkValidToken(user)
        .then(result => {
            if (result === token) {
                return res.status(404).send({ 'message': 'You dont have permission, invalid token' });
            }
            else {
                User.listUser({}, (err, result) => {
                    if (err) res.send(JSON.stringify(err));
                    else {
                        return res.send(JSON.stringify(result));
                    }
                })
            }
    })
}
exports.user = (req, res) => {
    const token = req.body.token || req.headers['x-access-token'];
    const user = req.body.username;
    checkValidToken(user)
        .then(result => {
            if (result === token) {
                return res.status(404).send({ 'message': 'You dont have permission, invalid token' });
            }
            else {
                User.findOnlyOne({ username: req.body.username })
                    .then(user => {
                        userInfo = {
                            name: user.name,
                            birthday: user.birth,
                            class: user.class,
                            roles:user.roles,
                        }
                        res.send(userInfo);
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => {
            res.json(err);
    })
}
exports.delUser = (req, res) => {
    const userDel = req.body.userDel;
    const adminToken = req.body.token || req.headers['x-access-token'];
    checkValidToken(req.body.username)
        .then(token => {
            if (token == adminToken) {
                return res.status(404).send({ message: `You don't have permission` });
            }
            else {
                User.delOneUser(userDel)
                    .then(isDel => {
                        if (isDel) {
                            return res.send({ message: `${userDel} has been deleted !!` });
                        }
                        else return res.status(404).send({ message: `Not found ${userDel} !` });
                    })
                    .catch(err => {
                        res.send({ message: 'No connection' });
                })
            }
    })
}