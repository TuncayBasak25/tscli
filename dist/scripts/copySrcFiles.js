"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = __importDefault(require("path"));
function default_1() {
    const sourceFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "src"));
    for (let file of sourceFolder.findAllFile({}, true)) {
        if (file.extension !== ".ts" && file.extension !== ".js") {
            new explorer_1.File(file.path.replace(/src/, "dist")).content = file.content;
        }
    }
}
exports.default = default_1;
