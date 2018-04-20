import { GeneratePipelineFileProcessor } from "../GeneratePipelineFileProcessor";
import { GeneratePipelineFileArguments } from "../GeneratePipelineFileArguments";
import S from "string";
import { GeneratePipelineFileMessages } from "../GeneratePipelineFileMessages";

export class CheckFileName extends GeneratePipelineFileProcessor {
    public static readonly Instance = new CheckFileName();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        if (S(args.fileModel.fileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage(GeneratePipelineFileMessages.FileNameIsMissing);
        }
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
