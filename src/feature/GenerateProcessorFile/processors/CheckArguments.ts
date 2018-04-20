import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";

export class CheckArguments extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckArguments();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        if (!args.arguments) {
            args.AddWarning(GenerateProcessorFileMessages.ArgumentsMustBeProvided);
            return;
        }

        let templateData = { 
            processor: args.fileModel.options["className"], 
            file: args.fileModel.fileName 
        };

        if (S(args.arguments.className).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                S(GenerateProcessorFileMessages.ArgumentsClassNameIsMissing)
                    .template(templateData).s
            );
            return;
        }

        if (S(args.arguments.fileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                S(GenerateProcessorFileMessages.ArgumentsFileNameIsMissing)
                    .template(templateData).s
            );
            return;
        }
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
