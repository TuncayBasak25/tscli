"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = __importDefault(require("path"));
const terminal_1 = __importDefault(require("../../terminal"));
const compile_1 = __importDefault(require("../compile"));
function default_1() {
    const sourceFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "src"));
    sourceFolder.watch((eventType, filename) => {
        (0, compile_1.default)();
        terminal_1.default.run("node dist/index.js");
    });
    terminal_1.default.run("node dist/index.js");
}
exports.default = default_1;
