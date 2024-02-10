import { Folder } from "explorer";
import { Folder as AsyncFolder } from "file-system";
import path from "path";
import copySrcFiles from "../scripts/copySrcFiles";
import Terminal from "../terminal";

export default async function(): Promise<void> {
    const distFolder = new Folder(path.join(process.cwd(), "dist"));
    
    const srcFolder = await AsyncFolder.open(process.cwd(), "src");

    Terminal.run(
        () => distFolder.delete(),
        "tsc -p .",
        copySrcFiles
    );

    srcFolder.watcher.on("change", () => {
        Terminal.run(
            () => distFolder.delete(),
            "tsc -p .",
            copySrcFiles
        );
    });
}