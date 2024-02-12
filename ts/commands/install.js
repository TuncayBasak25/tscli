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
exports.install = void 0;
const file_system_1 = require("file-system");
function install(argumentsList) {
    return __awaiter(this, void 0, void 0, function* () {
        const moduleName = argumentsList.shift();
        if (!moduleName) {
            throw new Error("install is not implemented, specify a module name");
        }
        const localModuleFolder = yield file_system_1.Folder.open("C:", "TuncayBasak25");
        const localModule = yield localModuleFolder.hasFolder(moduleName);
        if (localModule) {
            const targetModule = yield file_system_1.Folder.open(process.cwd(), "node_modules", moduleName);
            localModule.copy(targetModule, ["node_modules", ".git", "package-lock.json"]);
            return;
        }
    });
}
exports.install = install;
