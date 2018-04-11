import { GenerateAbstractProcessorFileProcessor } from "../GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../GenerateAbstractProcessorFileArguments";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { GenerateAbstractProcessorFileOptions } from "../GenerateAbstractProcessorFileOptions";

export class EnsureFileModel extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new EnsureFileModel();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {
        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            args.fileModel,
            args.possibleName,
            GenerateAbstractProcessorFileOptions.NAME,
            args.interactionMode
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);
    }

    public SafeCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
