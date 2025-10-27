"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SECRET_KEY = process.env.JWT_SECRET || 'it-is-a-secret';
var verifyToken = function (req, res, next) {
    console.log("psst, here is a valid token");
    console.log(jsonwebtoken_1.default.sign({ id: 1 }, SECRET_KEY, { expiresIn: '1h' }));
    var authHeader = req.headers['authorization'];
    if (!authHeader)
        return res.status(401).send('No token provided');
    var token = authHeader.split(' ')[1];
    if (!token)
        return res.status(401).send('Token missing');
    try {
        var decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.error(err);
        res.status(403).send('Invalid token');
    }
};
exports.verifyToken = verifyToken;
