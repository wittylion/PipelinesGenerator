import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";

export class CheckAbstractProcessor extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckAbstractProcessor();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let templateData = { 
            processor: args.fileModel.className, 
            file: args.fileModel.fileName 
        };

        if (S(args.arguments.className).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                S(GenerateProcessorFileMessages.AbstractProcessorClassNameIsMissing)
                    .template(templateData).s
            );
            return;
        }

        if (S(args.arguments.fileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                S(GenerateProcessorFileMessages.AbstractProcessorFileNameIsMissing)
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
