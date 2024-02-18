import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function wc(): Promise<void> {
    const tsFolder = await Folder.open(process.cwd(), "ts");

    await compile();

    tsFolder.watcher.once("change", wc);
}