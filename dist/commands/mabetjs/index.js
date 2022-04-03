"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = __importDefault(require("path"));
const terminal_1 = __importDefault(require("../../terminal"));
const compile_1 = __importDefault(require("../compile"));
function default_1() {
    var _a;
    const sourceFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "src"));
    const serverTerminal = new terminal_1.default();
    sourceFolder.watch((eventType, filename) => {
        console.log("Start compilation");
        (0, compile_1.default)();
        terminal_1.default.run(() => console.log("Compilation end, killing port 3000"), "npx kill-port 3000", () => console.log("restarting server"), () => serverTerminal.run("node dist/index.js"));
    });
    (_a = sourceFolder.findFile({ name: { end: "controller.ts" } })) === null || _a === void 0 ? void 0 : _a.watch(() => {
        console.log("Controller modified");
    });
    serverTerminal.run("node dist/index.js");
}
exports.default = default_1;
