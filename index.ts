#!/usr/bin/env node


import { Folder } from "explorer";


function commandHandler(): void {
    const rootFolder = new Folder(__dirname);

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

    const command = commandsFolder.findFile({ name: commandName })?.require();

    if (!command) {
        //To do
        console.log(commandName + " is not a tscli command!");

        return;
    }

    command(argumentsList, optionList);
}

commandHandler();