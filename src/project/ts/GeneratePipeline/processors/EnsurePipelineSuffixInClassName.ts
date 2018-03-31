import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

import S = require("string");

export class EnsurePipelineSuffixInClassName extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsurePipelineSuffixInClassName();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        await new Promise((resolve) => {
            this.CustomExecution(args);
            resolve();
        });
    }

    public CustomExecution(args: GenerateTypescriptPipelineArguments): void {
        args.pipelineName = S(args.pipelineName).ensureRight("Pipeline").s;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = args.ensurePipelineSuffixInClassName;
        return safeCondition;
    }
}
