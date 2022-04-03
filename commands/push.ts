import Git from "../git";
import Terminal from "../terminal";

export default function push(argumentsList: string[], optionList: string[]): void {
    
    const message = argumentsList[0];

    
    Terminal.run(
        "rm -rf dist",
        "tsc -p ."
    );
    
    Git.push(message);
}