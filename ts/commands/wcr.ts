import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function wcr(): Promise<void> {
    const tsFolder = await Folder.open(process.cwd(), "ts");

    console.log("CHANGE");
    Terminal.open("app").kill();

    await compile();

    Terminal.open("app").node();
    console.log("End of cycle");

    tsFolder.watcher.once("change", wcr);
}