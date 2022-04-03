import Git from "../git";

export default function(argumentsList: string[], optionList: string[]): void {
    
    const message = argumentsList[0];
    
    Git.push(message);
}