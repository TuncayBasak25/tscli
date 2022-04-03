#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
function commandHandler() {
    var _a;
    const rootFolder = new explorer_1.Folder(__dirname);
    const commandsFolder = rootFolder.findFolder({ name: "commands" });
    if (!commandsFolder) {
        throw new Error("The command folder is missing!");
    }
    const inputList = process.argv.slice(2);
    if (inputList.length === 0) {
        //To do
        console.log("Help message");
        return;
    }
    const commandName = inputList.shift();
    const argumentsList = inputList.filter(input => input[0] !== "-" && input[1] !== "--");
    const optionList = inputList.filter(input => input[0] + input[1] === "--" || input[0] === '-');
    const command = (_a = commandsFolder.findOne({ name: commandName })) === null || _a === void 0 ? void 0 : _a.require();
    if (!command) {
        //To do
        console.log(commandName + " is not a tscli command!");
        return;
    }
    command(argumentsList, optionList);
}
commandHandler();
