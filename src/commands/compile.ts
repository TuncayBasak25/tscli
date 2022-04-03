import { File, Folder } from "explorer";
import path from "path";
import copySrcFiles from "../scripts/copySrcFiles";
import Terminal from "../terminal";

export default function(argumentsList: string[], optionList: string[]): void {
    new Folder(path.join(process.cwd(), "dist")).delete();
    
    Terminal.run(
        "tsc -p ."
    );

    Terminal.onEnd = () => copySrcFiles();
}