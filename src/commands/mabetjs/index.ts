import { Folder } from "explorer";
import path from "path";
import Terminal from "../../terminal";
import compile from "../compile";

export default function() {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    const serverTerminal = new Terminal();

    sourceFolder.watch((eventType: string, filename: string) => {
        compile();
        Terminal.run(
            "npx kill-port 3000",
            () => serverTerminal.run("node dist/index.js")
        );
    });

    serverTerminal.run("node dist/index.js");
}