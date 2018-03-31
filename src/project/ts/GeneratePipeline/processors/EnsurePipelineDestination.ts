import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

import path = require("path");
import S from "string";

export class EnsurePipelineDestination extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsurePipelineDestination();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        await new Promise((resolve) => {
            this.CustomExecution(args);
            resolve();
        });
    }

    public CustomExecution(args: GenerateTypescriptPipelineArguments): void {
        let pipelinePath: string = args.pipelineFileName;

        if (args.createSubdirectory) {
            pipelinePath = path.join(args.subdirectoryName, pipelinePath);
        }

        args.pipelineDestination = args.yeomanGenerator.destinationPath(pipelinePath);
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = S(args.pipelineDestination).isEmpty();
        return safeCondition;
    }
}
