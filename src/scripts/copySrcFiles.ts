import { File, Folder } from "explorer";
import path from "path";

export default function(): void {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    for (let file of sourceFolder.findAllFile({}, true)) {
        if (file.extension !== ".js") {
            new File(file.path.replace(/src/, "dist")).content = file.content;
        }
    }
}