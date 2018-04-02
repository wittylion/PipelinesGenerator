import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";

export class GenerateMainExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateMainExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        throw new Error("Not implemented.");
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
