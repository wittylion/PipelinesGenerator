import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";

export class CheckFileName extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckFileName();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        if (S(args.fileModel.fileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage(GenerateProcessorFileMessages.FileNameIsMissing);
        }
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
