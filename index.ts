#!/usr/bin/env node


import { Folder } from "explorer";


const rootFolder = new Folder(__dirname);

const commandsFolder = rootFolder.findFolder({ name: "commands" });

if (!commandsFolder) {
    throw new Error("The command folder is missing!");
}

const commandName = process.argv[2];

if (!commandName) {
    //To do
    console.log("Help message");
}

const command = commandsFolder.findFile({ name: commandName })?.require();

if (!command) {
    //To do
    console.log(commandName + " is not a tscli command!");
}

console.log(process.argv);
