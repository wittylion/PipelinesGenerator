import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

import S = require("string");

export class EnsureTemplateDestination extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsureTemplateDestination();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        args.templateDestination = args.yeomanGenerator.templatePath(args.templateFileName);
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = !S(args.templateFileName).isEmpty() && S(args.templateDestination).isEmpty();
        return safeCondition;
    }
}
