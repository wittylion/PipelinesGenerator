import { GenerateArgumentsFileProcessor } from "../GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../GenerateArgumentsFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { GenerateArgumentsFileOptions } from "../GenerateArgumentsFileOptions";

export class EnsureFileModel extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new EnsureFileModel();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            args.fileModel,
            args.possibleName,
            GenerateArgumentsFileOptions.ARGUMENTS_NAME,
            args.possibleExtension,
            args.interactionMode
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
