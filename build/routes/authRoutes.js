"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    ;
    res.status(403);
    res.send('Not permitted');
};
module.exports = express_1.Router()
    .get('/login', function (req, res) {
    res.send("\n    <form method='POST'>\n      <div>\n        <label>Email</label>\n        <input type='text' name='email' />\n      </div>\n\n      <div>\n        <label>Password</label>\n        <input type='password' name='password' />\n      </div>\n\n      <button>Submit</button>\n    </form>\n    ");
})
    .post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@bye.com' && password === 'trees') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('You must provide email and password');
    }
})
    .get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
})
    .get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, you\'re logged in');
});
