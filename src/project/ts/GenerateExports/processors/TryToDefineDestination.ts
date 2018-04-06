import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../../../feature/EnsureOption";

export class TryToDefineDestination extends GenerateExportsProcessor {
    public static readonly Instance = new TryToDefineDestination();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        args.exportFileDestination
            = await EnsureOptionExecutor.obtainByKey(args.yeomanGenerator, "exportsPath");
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = S(args.exportFileDestination).isEmpty();
        return safeCondition;
    }
}
