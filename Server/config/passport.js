const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
passport.use(new localStrategy({
    usernameField: 'username',
    passwordField:'password'
}, (username, password) => {
    return new Promise((resolve, reject) => {
        User.comparePassword(password, username.password)
            .then(isMatch => {
                resolve(username);
            })
            .catch(err => reject(err));
    })
}))