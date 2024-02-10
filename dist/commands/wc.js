"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = __importDefault(require("path"));
const copySrcFiles_1 = __importDefault(require("../scripts/copySrcFiles"));
const terminal_1 = __importDefault(require("../terminal"));
function default_1() {
    const distFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "dist"));
    const srcFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "src"));
    srcFolder.watch(() => {
        terminal_1.default.run(() => distFolder.delete(), "tsc -p .", copySrcFiles_1.default);
    });
}
exports.default = default_1;
