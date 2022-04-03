import { Folder } from "explorer";
import path from "path";
import Terminal from "../../terminal";
import compile from "../compile";

export default function() {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    const serverTerminal = new Terminal();
    const compilerTerminal = new Terminal();

    compilerTerminal.run("tsc -w");

    sourceFolder.watch((eventType: string, filename: string) => {        
        Terminal.run(
            "npx kill-port 3000",
            () => serverTerminal.run("node dist/index.js")
        );
    });

    sourceFolder.findFile({ name: { end: "controller.ts" } })?.watch(() => {
        console.log("Controller modified");
    });

    serverTerminal.run("node dist/index.js");
}