import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";
import { Defaults } from "../../Defaults";
import S from "string";

export class UpdateExportsFile extends GenerateExportsProcessor {
    public static readonly Instance = new UpdateExportsFile();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {

        const name = args.getFilnalName();
        let result = "";

        args.exportRelativePaths.map(path => {
            return S(Defaults.exportDeclaration).template({
                classes: "*",
                file: path
            }).s
        }).forEach(row => {
             result.concat(row, '\n');
        });

        const content = args.yeomanGenerator.fs.read(name) + '\n' + result;
        args.yeomanGenerator.fs.write(name, content);

    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        console.log(args.exportFileNames);
        let safeCondition = args.exportRelativePaths.length > 0;
        return safeCondition;
    }
}
