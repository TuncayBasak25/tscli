import { Folder } from "explorer";
import Terminal from "../terminal";

export default function compile(argumentsList: string[], optionList: string[]): void {
    Terminal.run(
        "rm -rf dist",
        "tsc -p ."
    );
}