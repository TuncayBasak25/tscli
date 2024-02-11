import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function wcr(): Promise<void> {
    const srcFolder = await Folder.open(process.cwd(), "ts");

    console.log("CHANGE");
    Terminal.open("runner").kill();

    await compile();

    Terminal.open("runner").run("node ./ts/index");
    console.log("End of cycle");

    srcFolder.watcher.once("change", wcr);
}