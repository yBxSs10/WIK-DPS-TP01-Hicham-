"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const PORT = (_a = process.env.PING_LISTEN_PORT) !== null && _a !== void 0 ? _a : 8080;
api_1.default.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
