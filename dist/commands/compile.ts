import { File, Folder } from "explorer";
import path from "path";
import Terminal from "../terminal";

export default function(argumentsList: string[], optionList: string[]): void {
    Terminal.run(
        "rm -rf dist",
        "tsc -p ."
    );

    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    for (let file of sourceFolder.findAllFile()) {
        if (file.extension !== "ts" && file.extension !== "js") {
            new File(file.path.replace(/src/, "dist")).content = file.content;
        }
    }
}