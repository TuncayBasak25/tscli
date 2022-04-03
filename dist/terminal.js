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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const { exec } = require("child_process");
class Terminal {
    constructor() {
        this.commandList = [];
        this.cwd = process.cwd();
        this.listen();
    }
    static run(...commandList) {
        this.main.run(...commandList);
    }
    static chdir(cwd) {
        this.main.chdir(cwd);
    }
    onNewCommand() { }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.commandList.length === 0) {
                yield new Promise(resolve => this.onNewCommand = resolve);
            }
            const command = this.commandList.shift();
            yield this.exec(command);
            this.listen();
        });
    }
    run(...commandList) {
        this.commandList.push(...commandList);
        this.onNewCommand();
    }
    chdir(relativePath) {
        const cwd = path_1.default.join(this.cwd, relativePath);
        if (!(0, fs_1.existsSync)(cwd)) {
            console.error(cwd + " is not an existing directory.");
        }
        this.cwd = cwd;
    }
    exec(command) {
        return __awaiter(this, void 0, void 0, function* () {
            let next = () => { };
            exec(command, { cwd: this.cwd }, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                }
                console.log(stdout);
                next();
            });
            return new Promise(resolve => next = resolve);
        });
    }
}
exports.default = Terminal;
Terminal.main = new Terminal();
