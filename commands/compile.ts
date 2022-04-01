import terminal from "../terminal";

export default async function push(argumentsList: string[], optionList: string[]): Promise<void> {
    await terminal("tsc -p .");
}