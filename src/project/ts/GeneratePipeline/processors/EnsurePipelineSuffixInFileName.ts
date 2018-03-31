import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";
import S from "string";

export class EnsurePipelineSuffixInFileName extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsurePipelineSuffixInFileName();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        let fileName = S(args.pipelineFileName);
        if (fileName.endsWith(".ts")) {
            fileName = fileName.chompRight(".ts");
        }

        args.pipelineFileName
            = fileName
                .ensureRight("Pipeline")
                .ensureRight(".ts").s;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = args.ensurePipelineSuffixInFileName && S(args.pipelineDestination).isEmpty();
        return safeCondition;
    }
}
