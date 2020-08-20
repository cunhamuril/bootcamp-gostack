"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloTypeScript = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloTypeScript(request, response) {
    var user = CreateUser_1.default({
        email: "murilo.cunha@mail.com",
        password: "123456",
    });
    return response.json(user);
}
exports.helloTypeScript = helloTypeScript;
