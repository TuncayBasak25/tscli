"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = require("path");
const git_1 = __importDefault(require("../../git"));
const terminal_1 = __importDefault(require("../../terminal"));
function create(argumentsList, optionList) {
    var _a, _b;
    console.log("Create new typescript project");
    if (argumentsList.length === 0) {
        console.log("You must specify the name of the project:  tscli init projectname");
        return;
    }
    const projectname = argumentsList[0];
    const projectFolder = new explorer_1.Folder((0, path_1.join)(process.cwd(), projectname));
    const sourceFolder = new explorer_1.Folder(__dirname);
    projectFolder.createFile("package.json").content = ((_a = sourceFolder.findFile({ basename: "package" })) === null || _a === void 0 ? void 0 : _a.content).replace(/new_project/g, projectname);
    projectFolder.createFile("tsconfig.json").content = (_b = sourceFolder.findFile({ basename: "tsconfig" })) === null || _b === void 0 ? void 0 : _b.content;
    projectFolder.createFile(".gitignore").content = "node_modules";
    terminal_1.default.chdir(projectname);
    terminal_1.default.run("npm install");
    git_1.default.init().create(projectname, optionList.includes("--public") ? "--public" : "--private");
}
exports.default = create;
