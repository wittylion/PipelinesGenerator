import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";
import S from "string";

export class EnsureTemplateFileName extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new EnsureTemplateFileName();
    public static DefaultTemplate = "_pipeline.ts.ejs";

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        args.templateFileName = EnsureTemplateFileName.DefaultTemplate;
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = S(args.templateFileName).isEmpty();
        return safeCondition;
    }
}
