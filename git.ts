import { existsSync } from "fs";
import { join } from "path";
import Terminal from "./terminal";

export default class Git {

    public static push(message: string = "Upload"): typeof Git {
        if (!existsSync(join(process.cwd(), ".git"))) {
            console.log("The git repository is not initialized yet");
            return Git;
        }

        Terminal.run(
            "git add .",
            `git commit -m "${message}"`,
            "git push"
        );

        return Git;
    }

    public static init(branchName: string = "main"): typeof Git {
        Terminal.run(
            "git init",
            "git add .",
            'git commit -m "initial commit"',
            `git branch -M ${branchName}`,
        );

        return Git;
    }

    public static create(repositoryName: string, visibility: "--public" | "--private" = "--private"): typeof Git {
        Terminal.run(
            `gh repo create ${repositoryName} ${visibility} --source=. --push`
        );

        return Git;
    }
}