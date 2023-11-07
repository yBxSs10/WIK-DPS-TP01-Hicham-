"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundMiddleware = (req, res, next) => {
    res.status(404).send();
};
exports.default = notFoundMiddleware;
