import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function wcr(): Promise<void> {
    const srcFolder = await Folder.open(process.cwd(), "ts");

    console.log("CHANGE");
    Terminal.open("app").kill();

    await compile();

    Terminal.open("app").node();
    console.log("End of cycle");

    srcFolder.watcher.once("change", wcr);
}