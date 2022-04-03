import { existsSync } from "fs";
import path from "path";

const { exec } = require("child_process");

type Command = string | (() => void);

export default class Terminal {

    private static main: Terminal = new Terminal();

    public static run(...commandList: Command[]): void {
        this.main.run(...commandList);
    }

    public static chdir(cwd: string): void {
        this.main.chdir(cwd);
    }


    private commandList: Command[] = [];
    private onNewCommand(): void {}
    private cwd: string = process.cwd();

    public constructor() {
        this.listen();
    }

    private async listen(): Promise<void> {
        if (this.commandList.length === 0) {
            await new Promise<void>(resolve => this.onNewCommand = resolve);
        }

        const command = this.commandList.shift();

        if (typeof command === 'string') {
            await this.exec(command);
        }
        else if (command) {
            command();
        }

        this.listen();
    }

    public run(...commandList: Command[]): void {
        this.commandList.push(...commandList);

        this.onNewCommand();
    }

    public chdir(relativePath: string): void {
        this.run(() => {
            const cwd = path.join(this.cwd, relativePath);

            if (!existsSync(cwd)) {
                console.error(cwd + " is not an existing directory.");
            }

            this.cwd = cwd;
        });
    }

    private async exec(command: string): Promise<void> {
        let next = () => { };

        exec(command, { cwd: this.cwd }, (error: Error, stdout: string, stderr: string) => {
            if (error) {
                console.log(`error: ${error.message}`);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            console.log(stdout);

            next();
        });


        return new Promise(resolve => next = resolve);
    }
}