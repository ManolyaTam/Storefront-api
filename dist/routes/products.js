"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send('Get List of products');
});
router.get('/:id', function (req, res) {
    res.send("Get product by ID");
});
router.post('/', function (req, res) {
    res.send("Creates a new product");
});
exports.default = router;
