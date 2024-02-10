import { Folder } from "explorer";
import path from "path";
import copySrcFiles from "../scripts/copySrcFiles";
import Terminal from "../terminal";

export default function(): void {
    Terminal.run(
        () => new Folder(path.join(process.cwd(), "dist")).delete(),
        "tsc -p .",
        copySrcFiles
    );
}