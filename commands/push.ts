import { existsSync } from "fs";
import { join } from "path";
import terminal from "../terminal";

export default async function push(argumentsList: string[], optionList: string[]): Promise<void> {
    const message = argumentsList.length > 0 ? argumentsList[0] : "Upload";

    if (!existsSync(join(process.cwd(), ".git"))) {
        console.log("The git repository is not initialized yet");
        return;
    }

    await terminal("git add .");
    await terminal("git commit -m " + message);
    await terminal("git push");

    await terminal("tsc -p .");
    await terminal("cd dist & git add. & git commit -m " + message + " & git push");
}