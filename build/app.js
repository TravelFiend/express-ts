"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var appRouter_1 = require("./appRouter");
require("./controllers/AuthControllers");
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['dshvgSGGFSGSqdiuyacBL812Ckjsdvsd5rv7r8'] }));
app.use(appRouter_1.AppRouter.getInstance());
app.use('/auth', require('./routes/authRoutes'));
app.use('/', require('./routes/home'));
app.listen(4343, function () {
    console.log('Listening on port 4343');
});
