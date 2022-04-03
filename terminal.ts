const { exec } = require("child_process");


export default class Terminal {

    private static main: Terminal = new Terminal();

    public static run(...commandList: string[]): void {
        this.main.run(...commandList);
    }

    private commandList: string[] = [];
    private onNewCommand(): void { }

    public constructor() {
        this.listen();
    }

    private async listen(): Promise<void> {
        if (this.commandList.length === 0) {
            await new Promise<void>(resolve => this.onNewCommand = resolve);
        }

        const command = this.commandList.shift() as string;

        await this.exec(command);

        this.listen();
    }

    public run(...commandList: string[]): void {
        this.commandList.push(...commandList);

        this.onNewCommand();
    }

    private async exec(command: string): Promise<void> {
        let next = () => { };

        exec(command, (error: Error, stdout: string, stderr: string) => {
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