"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
module.exports = express_1.Router()
    .get('/login', function (req, res) {
    res.send("\n    <form method='POST'>\n      <div>\n        <label>Email</label>\n        <input type='text' name='email' />\n      </div>\n\n      <div>\n        <label>Password</label>\n        <input type='password' name='password' />\n      </div>\n\n      <button>Submit</button>\n    </form>\n    ");
})
    .post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    console.log(email + password);
    res.send(email + password);
});
