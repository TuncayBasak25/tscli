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
Object.defineProperty(exports, "__esModule", { value: true });
exports.wc = void 0;
const file_system_1 = require("file-system");
const compile_1 = require("./compile");
function wc() {
    return __awaiter(this, void 0, void 0, function* () {
        const tsFolder = yield file_system_1.Folder.open(process.cwd(), "ts");
        yield (0, compile_1.compile)();
        tsFolder.watcher.once("change", wc);
    });
}
exports.wc = wc;
