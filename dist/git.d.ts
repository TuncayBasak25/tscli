export default class Git {
    static push(message?: string): typeof Git;
    static init(branchName?: string): typeof Git;
    static create(repositoryName: string, visibility?: "--public" | "--private"): typeof Git;
}
//# sourceMappingURL=git.d.ts.map