export default class Terminal {
    private static main;
    static run(...commandList: string[]): void;
    static set onEnd(callback: () => void);
    static chdir(cwd: string): void;
    private commandList;
    private onNewCommand;
    onEnd(): void;
    private cwd;
    constructor();
    private listen;
    run(...commandList: string[]): void;
    chdir(relativePath: string): void;
    private exec;
}
//# sourceMappingURL=terminal.d.ts.map