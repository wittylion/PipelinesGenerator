import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";
import { GenerateTypescriptPathExecutor } from "../../../foundation/GenerateTypescriptPath";

export class GenerateArgumentsImportStatement extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateArgumentsImportStatement();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let result
            = await GenerateTypescriptPathExecutor.getPath(args.fileModel.getFinalPath(), args.arguments.fileName);

        if (result.result) {
            args.argumentsImportStatement = result.result;
        }
        else {
            args.AbortPipelineWithErrorMessage("Cannot obtain import statement for arguments path.");
        }

        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
