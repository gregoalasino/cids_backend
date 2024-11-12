"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = void 0;
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    console.log("Hola");
    response.send("Buenas");
});
app.listen(PORT);
console.log(`application running on port ${PORT}`);
const initializeApp = () => { };
exports.initializeApp = initializeApp;
