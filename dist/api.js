"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const midlleware_1 = __importDefault(require("./midlleware"));
const app = (0, express_1.default)();
app.get('/ping', (req, res) => {
    res.json(req.headers);
});
app.use(midlleware_1.default);
exports.default = app;
