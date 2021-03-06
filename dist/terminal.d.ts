declare type Command = string | (() => void);
export default class Terminal {
    private static main;
    static run(...commandList: Command[]): void;
    static chdir(cwd: string): void;
    private process?;
    private commandList;
    private onNewCommand;
    private cwd;
    constructor();
    private listen;
    run(...commandList: Command[]): void;
    chdir(relativePath: string): void;
    kill(): void;
    private exec;
}
export {};
//# sourceMappingURL=terminal.d.ts.map