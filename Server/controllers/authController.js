const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

exports.isAuth = (req, res, next) => {
    let token = req.query.token == null ? req.headers['x-access-token'] : req.query.token;
    if (token) {
        jwt.verify(token, config.jwtSecret, (err, payload) => {
            if (err) res.status(404).json({ message: 'Authenticate Error' });
            else {
                User.findOnlyOne({ 'username': payload.username })
                    .then(user => {
                        req.body.username = user.username;//next route using body.username = user.username;
                        req.body.token = token;
                        req.body.roles = user.roles;
                        next();
                    })
                    .catch(err => {
                        console.log(err);
                })
            }
        })
    }
    else {
        res.json({ message: 'Token error' });
    }
}
exports.isAdmin = (req, res, next) => {
    console.log(req.body.roles);//loi bao mat
    if (req.body.roles === 'admin' || req.body.roles === 'root')
        next();
    else res.json({ message: 'You dont have permission' });
}
exports.isRoot = (req, res, next) => {
    console.log(req.body.roles);
    if (req.body.roles === 'root')
        next();
    else res.json({ message: `You don't have permission, please contact your super admin` });
}