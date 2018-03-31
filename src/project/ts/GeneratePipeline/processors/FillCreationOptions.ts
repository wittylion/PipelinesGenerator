import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

export class FillCreationOptions extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new FillCreationOptions();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        args.creationOptions["pipelineName"] = args.pipelineName;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
