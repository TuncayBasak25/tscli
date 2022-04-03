"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("../git"));
function default_1(argumentsList, optionList) {
    const message = argumentsList[0];
    git_1.default.push(message);
}
exports.default = default_1;
