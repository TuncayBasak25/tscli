import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function wcr(): Promise<void> {
    const tsFolder = await Folder.open(process.cwd(), "ts");

    Terminal.open("app").kill();

    await compile();

    Terminal.open("app").node();

    tsFolder.watcher.once("change", wcr);
}