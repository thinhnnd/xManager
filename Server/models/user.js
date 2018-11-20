const mongoose = require('mongoose');
const Contact = require('./contact');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: 1 },
    name: String,
    class: { type: String, required: true },
    birth: { type: Date, default: Date.now },
    contact: { type: mongoose.SchemaTypes.ObjectId, ref: 'contact' },
    score: { type: mongoose.SchemaTypes.ObjectId, ref: 'scores' },
    roles: { type: String, default: 'user' },
    rights: { type: Array, default: ['notification, user-profile, time-table', 'learning-result'] },
    password: { type: String }
});
UserSchema.index({ username: 1, roles: 1,password:1 });
const User = module.exports = mongoose.model('users', UserSchema);
module.exports = {
    listUser: (filter, callback) => {
        User.find(filter, callback);
    },
    createUser: (newUser) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    if (err) reject(err);
                    else {
                        resolve(User.create(newUser));
                    }
                })
            })
        })
    },
    getUserByStdID: (username) => {
        return new Promise((resolve, reject) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) reject(err);
                else {
                    resolve(user);
                };
            })
        })
    },
    comparePassword: (candidatePassword, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
                if (err) reject(err);
                resolve(isMatch);
            })
        })
    },
    findOnlyOne: (filter) => {
        return new Promise((resolve, reject) => {
            User.findOne(filter, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        })
    },
    updateByUsername: (username,upsertUser) => {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(username, upsertUser, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        })
    },
    delOneUser: (username) => {
        return new Promise((resolve, reject) => {
            User.findOneAndDelete({ username: username }, (err, isDel) => {
                if (err) reject(err);
                else resolve(isDel);
            })
        })
    }
}
