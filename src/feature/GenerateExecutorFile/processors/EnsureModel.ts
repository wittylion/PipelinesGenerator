import { GenerateExecutorFileProcessor } from "../GenerateExecutorFileProcessor";
import { GenerateExecutorFileArguments } from "../GenerateExecutorFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";

export class EnsureModel extends GenerateExecutorFileProcessor {
    public static readonly Instance = new EnsureModel();

    public async SafeExecute(args: GenerateExecutorFileArguments): Promise<void> {
        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            args.fileModel,
            args.possibleName,
            args.possibleExtension,
            args.interactionMode
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);
    }

    public SafeCondition(args: GenerateExecutorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExecutorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
