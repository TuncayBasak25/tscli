
import { Folder } from "file-system";
import Terminal from "terminal";

export async function compile(): Promise<void> {
    await Terminal.open("compiler").run("tsc");

    const tsFolder = await Folder.open(process.cwd(), "ts");

    const allFileList = await tsFolder.recursiveFileList;

    const jsFileList = allFileList.filter(file => file.extension === "js");
    const tsFileNameList = allFileList.filter(file => file.extension === "ts").map(file => file.basename);

    //Delete js files that has not ts peer
    const jsToDeleteList = jsFileList.filter(file => !tsFileNameList.includes(file.basename));

    for (const file of jsToDeleteList) await file.delete();

    
}