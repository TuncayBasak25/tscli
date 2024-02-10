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
const explorer_1 = require("explorer");
const file_system_1 = require("file-system");
const path_1 = __importDefault(require("path"));
const copySrcFiles_1 = __importDefault(require("../scripts/copySrcFiles"));
const terminal_1 = __importDefault(require("../terminal"));
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        const distFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "dist"));
        const srcFolder = yield file_system_1.Folder.open(process.cwd(), "src");
        terminal_1.default.run(() => distFolder.delete(), "tsc -p .", copySrcFiles_1.default);
        srcFolder.watcher.on("change", () => {
            terminal_1.default.run(() => distFolder.delete(), "tsc -p .", copySrcFiles_1.default);
        });
    });
}
exports.default = default_1;
