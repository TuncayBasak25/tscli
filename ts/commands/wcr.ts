import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";

export default async function(): Promise<void> {
    const srcFolder = await Folder.open(process.cwd(), "ts");

    let delay = false;
    srcFolder.watcher.on("change", async () => {
        if (delay) return; delay = true; setTimeout(() => delay = false, 1000);

        await compile();

        Terminal.open("runner").run("node ./ts/index");
    });
}