import { Folder } from "explorer";
import path from "path";
import Terminal from "../../terminal";

export default function() {
    const sourceFolder = new Folder(path.join(process.cwd(), "src"));

    const serverTerminal = new Terminal();
    const compilerTerminal = new Terminal();

    compilerTerminal.run("tsc -w");

    sourceFolder.watch(() => {        
        Terminal.run(
            () => serverTerminal.kill(),
            () => serverTerminal.run("node dist/index.js")
        );
    });

    sourceFolder.findFolder({ name: "services" })?.watch(({ subject: serviceFolder, filename }: { subject: Folder, filename: string }) => {
        if (filename === "index.ts") {
            return;
        }

        serviceFolder.createFile("index.ts").delete();

        const serviceModuleList = serviceFolder.findAll();

        
        let content = `import { Controller } from "mabetjs"\n\nexport default class Services extends Controller {\n\n`;
        
        for (let serviceModule of serviceModuleList) {
            const className = serviceModule.name[0]
                .replace(/^[a-z]/, x => x.toUpperCase())
                .replace(/\.[a-z]/g, x => x[1].toUpperCase());
                
            content =
            `import ${className} from "./${serviceModule.name}"\n` +
            content +
            `\tprotected ${serviceModule.name}: ${className} = new ${className}();\n`;
        }
        
        content += "\n}"

        serviceFolder.createFile("index.ts").content = content;
    });


    serverTerminal.run("node dist/index.js");
}