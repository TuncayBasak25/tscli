import Terminal from "terminal";
import { compile } from "./compile";

export async function push(argumentsList: string[], optionList: string[]): Promise<void> {
    
    await compile();
    
    const message = argumentsList.shift() || "Upload";

    await Terminal.open("git").run("git add .", `git commit -m "${message}"`, "git push");
}