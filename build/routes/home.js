"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
module.exports = express_1.Router()
    .get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <p>You are logged in!</p>\n        <a href='/auth/logout'>Logout</a>\n      </div>\n      ");
    }
    else {
        res.send("\n      <div>\n        <p>You are not logged in</p>\n        <a href='/auth/login'>Login</a>\n      </div>\n      ");
    }
});
