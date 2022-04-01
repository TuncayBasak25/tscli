import { existsSync } from "fs";
import { join } from "path";
import terminal from "../terminal";

export default function push(argumentsList: string[], optionList: string[]): void {
    const message = argumentsList.length > 0 ? argumentsList[0] : "Upload";

    if (!existsSync(join(process.env.CWD as string, ".git"))) {
        console.log("The git repository is not initialized yet");
        return;
    }

    terminal("git add .");
    terminal("git commit -m " + message);
    terminal("git push");
}