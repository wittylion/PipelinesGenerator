import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";

export class EnsureCommonSubfolders extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new EnsureCommonSubfolders();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        if (args.createSubfolderWithPipelineName) {
            args.commonSubfolders.push(args.pipelineNameSpecifiedByUser);
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
