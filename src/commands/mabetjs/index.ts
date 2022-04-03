import { Folder } from "explorer";
import path from "path";
import Terminal from "../../terminal";
import compile from "../compile";

export default function() {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    const serverTerminal = new Terminal();

    sourceFolder.watch((eventType: string, filename: string) => {
        console.log("Start compilation");
        compile();
        
        Terminal.run(
            () => console.log("Compilation end, killing port 3000"),
            "npx kill-port 3000",
            () => console.log("restarting server"),
            () => serverTerminal.run("node dist/index.js")
        );
    });

    sourceFolder.findFile({ name: { end: "controller.ts" } })?.watch(() => {
        console.log("Controller modified");
    });

    serverTerminal.run("node dist/index.js");
}