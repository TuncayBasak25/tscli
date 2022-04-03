"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("../git"));
const terminal_1 = __importDefault(require("../terminal"));
function push(argumentsList, optionList) {
    const message = argumentsList[0];
    terminal_1.default.run("rm -rf dist", "tsc -p .");
    git_1.default.push(message);
}
exports.default = push;
