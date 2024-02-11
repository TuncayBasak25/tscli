#!/usr/bin/env node

import { Folder } from "file-system";



(async function(){
    const commandsFolder = await Folder.open(__dirname, "commands");

    const inputList = process.argv.slice(2);
    
    const commandName = inputList.shift();

    if (!commandName) {
        //To do
        console.log("Help message");
        return;
    }

    const argumentsList = inputList.filter(input => input[0] !== "-" && input[1] !== "--");

    const optionList = inputList.filter(input => input[0] + input[1] === "--" || input[0] === '-');
    
    const command = await (await commandsFolder.hasEntry(commandName + ".js", commandName))?.require()[commandName];

    if (!command) {
        //To do
        console.log(commandName + " is not a tscli command!");

        return;
    }

    command(argumentsList, optionList);
})()

