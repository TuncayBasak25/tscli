#!/usr/bin/env node
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
const file_system_1 = require("file-system");
(function () {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const commandsFolder = yield file_system_1.Folder.open(__dirname, "commands");
        const inputList = process.argv.slice(2);
        const commandName = inputList.shift();
        if (!commandName) {
            //To do
            console.log("Help message");
            return;
        }
        const argumentsList = inputList.filter(input => input[0] !== "-" && input[1] !== "--");
        const optionList = inputList.filter(input => input[0] + input[1] === "--" || input[0] === '-');
        const command = yield ((_a = (yield commandsFolder.hasEntry(commandName))) === null || _a === void 0 ? void 0 : _a.require());
        if (!command) {
            //To do
            console.log(commandName + " is not a tscli command!");
            return;
        }
        command(argumentsList, optionList);
    });
})();
