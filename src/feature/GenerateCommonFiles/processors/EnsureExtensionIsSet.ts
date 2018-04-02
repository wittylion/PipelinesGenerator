import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";

export class EnsureExtensionIsSet extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new EnsureExtensionIsSet();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        if (S(args.extension).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You must provide an extension to create files from templates.");
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
