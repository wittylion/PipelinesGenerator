import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";

export class ValidatePipelineName extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new ValidatePipelineName();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        if (S(args.pipelineNameSpecifiedByUser).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You must provide pipeline name to create a pipeline.");
        }
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
