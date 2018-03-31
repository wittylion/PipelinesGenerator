import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

export class ValidateGenerator extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new ValidateGenerator();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        if (!args.yeomanGenerator) {
            args.AbortPipelineWithErrorMessage(
                "You have to provide a generator into the generate pipeline context, so it is possible to expose yeoman API.");
        }
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
