import { GeneratePipelineFileProcessor } from "../GeneratePipelineFileProcessor";
import { GeneratePipelineFileArguments } from "../GeneratePipelineFileArguments";
import { GeneratePipelineFileMessages } from "../GeneratePipelineFileMessages";
import S from "string";

export class CheckClassName extends GeneratePipelineFileProcessor {
    public static readonly Instance = new CheckClassName();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        if (S(args.fileModel.options["className"]).isEmpty()) {
            args.AbortPipelineWithErrorMessage(GeneratePipelineFileMessages.ClassNameIsMissing);
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
