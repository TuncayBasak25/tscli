import { Folder } from "explorer";
import path from "path";
import copySrcFiles from "../scripts/copySrcFiles";
import Terminal from "../terminal";

export default function(): void {
    const distFolder = new Folder(path.join(process.cwd(), "dist"));
    const srcFolder = new Folder(path.join(process.cwd(), "src"));

    Terminal.run(
        () => distFolder.delete(),
        "tsc -p .",
        copySrcFiles
    );

    srcFolder.watch(() => {
        Terminal.run(
            () => distFolder.delete(),
            "tsc -p .",
            copySrcFiles
        );
    })
}