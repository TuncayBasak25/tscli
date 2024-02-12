import { Folder } from "file-system";
import { compile } from "./compile";
import Terminal from "terminal";


export async function install(argumentsList: string[]): Promise<void> {
    const moduleName = argumentsList.shift();

    if (!moduleName) {
        throw new Error("install is not implemented, specify a module name");
    }

    const localModuleFolder = await Folder.open("C:", "TuncayBasak25");

    const localModule = await localModuleFolder.hasFolder(moduleName);

    if (localModule) {
        const targetModule = await Folder.open(process.cwd(), "node_modules", moduleName);

        localModule.copy(targetModule, ["node_modules", ".git", "package-lock.json"]);

        return;
    }

}