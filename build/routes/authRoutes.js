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
    .get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
})
    .get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, you\'re logged in');
});
