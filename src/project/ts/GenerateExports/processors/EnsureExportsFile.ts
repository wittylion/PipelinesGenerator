import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

export class EnsureExportsFile extends GenerateExportsProcessor {
    public static readonly Instance = new EnsureExportsFile();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        args.yeomanGenerator.fs.write(args.getFilnalName(), "");
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = !args.yeomanGenerator.fs.exists(args.exportFileDestination);
        return safeCondition;
    }
}
