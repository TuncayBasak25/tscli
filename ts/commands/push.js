"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
const terminal_1 = __importDefault(require("terminal"));
const compile_1 = require("./compile");
function push(argumentsList, optionList) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, compile_1.compile)();
        const message = argumentsList.shift() || "Upload";
        yield terminal_1.default.open("git").run("git add .", `git commit -m "${message}"`, "git push");
    });
}
exports.push = push;
