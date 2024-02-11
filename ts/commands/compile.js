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
exports.compile = void 0;
const file_system_1 = require("file-system");
const terminal_1 = __importDefault(require("terminal"));
function compile() {
    return __awaiter(this, void 0, void 0, function* () {
        yield terminal_1.default.open("compiler").run("tsc");
        const tsFolder = yield file_system_1.Folder.open(process.cwd(), "ts");
        const allFileList = yield tsFolder.recursiveFileList;
        const jsFileList = allFileList.filter(file => file.extension === "js");
        const tsFileNameList = allFileList.filter(file => file.extension === "ts").map(file => file.basename);
        //Delete js files that has not ts peer
        const jsToDeleteList = jsFileList.filter(file => !tsFileNameList.includes(file.basename));
        for (const file of jsToDeleteList)
            yield file.delete();
    });
}
exports.compile = compile;
