const { exec } = require("child_process");

export default function terminal(command: string): Promise<void> {
    let next = () => {};

    exec(command, (error: Error, stdout: string, stderr: string) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);

        next();
    });

    return new Promise(resolve => next = resolve);
}
