import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

export class ValidateGenerator extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new ValidateGenerator();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage(
                "You have to provide a generator into the generate pipeline context, so it is possible to expose yeoman API.");
        }
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
