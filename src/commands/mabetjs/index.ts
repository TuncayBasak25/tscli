import { Folder } from "explorer";
import path from "path";
import Terminal from "../../terminal";
import compile from "../compile";

export default function() {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    sourceFolder.watch((eventType: string, filename: string) => {
        compile();
        Terminal.run("node dist/index.js");
    });

    Terminal.run("node dist/index.js");
}