"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const explorer_1 = require("explorer");
const path_1 = __importDefault(require("path"));
const terminal_1 = __importDefault(require("../../terminal"));
function default_1() {
    var _a;
    const sourceFolder = new explorer_1.Folder(path_1.default.join(process.cwd(), "src"));
    const serverTerminal = new terminal_1.default();
    const compilerTerminal = new terminal_1.default();
    compilerTerminal.run("tsc -w");
    sourceFolder.watch(() => {
        terminal_1.default.run("npx kill-port 3000", () => serverTerminal.run("node dist/index.js"));
    });
    (_a = sourceFolder.findFolder({ name: "services" })) === null || _a === void 0 ? void 0 : _a.watch(({ subject: serviceFolder, filename }) => {
        if (filename === "index.ts") {
            return;
        }
        serviceFolder.createFile("index.ts").delete();
        const serviceModuleList = serviceFolder.findAll();
        let content = "\n\nexport default class Services {\n\n";
        for (let serviceModule of serviceModuleList) {
            const className = serviceModule.name[0].toUpperCase() + serviceModule.name.slice(1);
            content =
                `import ${serviceModule.name} from "./${serviceModule.name}"\n` +
                    content +
                    `\tprotected ${serviceModule.name}: ${className} = new ${className}();\n`;
        }
        content += "\n}";
        serviceFolder.createFile("index.ts").content = content;
    });
    serverTerminal.run("node dist/index.js");
}
exports.default = default_1;
