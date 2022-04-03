import { File, Folder } from "explorer";
import { join } from "path";
import Git from "../../git";
import Terminal from "../../terminal";


export default function create(argumentsList: string[], optionList: string[]): void {
    console.log("Create new typescript project");

    if (argumentsList.length === 0) {
        console.log("You must specify the name of the project:  tscli init projectname")
        return;
    }

    const projectname = argumentsList[0];

    const projectFolder = new Folder(join(process.cwd(), projectname));


    const sourceFolder = new Folder(__dirname);

    projectFolder.createFile("package.json").content = (sourceFolder.findFile({ basename: "package" })?.content as string).replace(/new_project/g, projectname);
    projectFolder.createFile("tsconfig.json").content = sourceFolder.findFile({ basename: "tsconfig" })?.content as string;
    projectFolder.createFile(".gitignore").content = "node_modules";

    Terminal.chdir(projectname);

    Terminal.run("npm install");

    Git.init().create(projectname, optionList.includes("--public") ? "--public" : "--private");
}