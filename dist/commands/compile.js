"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_1 = __importDefault(require("../terminal"));
function compile(argumentsList, optionList) {
    terminal_1.default.run("rm -rf dist", "tsc -p .");
}
exports.default = compile;
