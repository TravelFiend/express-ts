"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookieparser = require('cookie-parser');
var app = express_1.default();
app.use(express_1.default.json());
app.use(cookieparser());
app.use('/api/v1/auth', require('./routes/loginRoutes'));
app.listen(4343, function () {
    console.log('Listening on port 4343');
});
