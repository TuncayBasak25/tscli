"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const terminal_1 = __importDefault(require("./terminal"));
class Git {
    static push(message = "Upload") {
        if (!(0, fs_1.existsSync)((0, path_1.join)(process.cwd(), ".git"))) {
            console.log("The git repository is not initialized yet");
            return Git;
        }
        terminal_1.default.run("git add .", `git commit -m "${message}"`, "git push");
        return Git;
    }
    static init(branchName = "main") {
        terminal_1.default.run("git init", "git add .", 'git commit -m "initial commit"', `git branch -M ${branchName}`);
        return Git;
    }
    static create(repositoryName, visibility = "--private") {
        terminal_1.default.run(`gh repo create ${repositoryName} ${visibility} --source=. --push`);
        return Git;
    }
}
exports.default = Git;
