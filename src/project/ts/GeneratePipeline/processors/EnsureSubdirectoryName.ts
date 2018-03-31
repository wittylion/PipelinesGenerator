import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";
import S from "string";

export class EnsureSubdirectoryName extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsureSubdirectoryName();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        args.subdirectoryName = args.pipelineName;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = args.createSubdirectory && S(args.subdirectoryName).isEmpty() && S(args.pipelineDestination).isEmpty();
        return safeCondition;
    }
}
