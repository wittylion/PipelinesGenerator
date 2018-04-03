import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";

export class ValidateYeomanGenerator extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new ValidateYeomanGenerator();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage("Yeoman generator must be provided to continue creation of the pipeline.");
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
