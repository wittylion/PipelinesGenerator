import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";
import S from "string";

export class EnsurePipelineFileName extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsurePipelineFileName();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        args.pipelineFileName = S(args.pipelineName).ensureRight(".ts").s;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = S(args.pipelineFileName).isEmpty();
        return safeCondition;
    }
}
