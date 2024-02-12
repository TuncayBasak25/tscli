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
exports.wcr = void 0;
const file_system_1 = require("file-system");
const compile_1 = require("./compile");
const terminal_1 = __importDefault(require("terminal"));
function wcr() {
    return __awaiter(this, void 0, void 0, function* () {
        const srcFolder = yield file_system_1.Folder.open(process.cwd(), "ts");
        console.log("CHANGE");
        terminal_1.default.open("app").kill();
        yield (0, compile_1.compile)();
        terminal_1.default.open("app").node();
        console.log("End of cycle");
        srcFolder.watcher.once("change", wcr);
    });
}
exports.wcr = wcr;
