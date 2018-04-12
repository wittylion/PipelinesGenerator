import S from "string";
import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileArguments";
import { GenerateTypescriptPathExecutor } from "../../GenerateTypescriptPath/GenerateTypescriptPathExecutor";

export class GenerateAbstractProcessorImportStatement extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateAbstractProcessorImportStatement();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        let result
            = await GenerateTypescriptPathExecutor.getPath(
                args.yeomanGenerator.destinationPath(args.fileModel.getSubdirectory()),
                args.yeomanGenerator.destinationPath(args.abstractProcessor.fileName)
            );

        if (result.result) {
            args.processorImportStatement = result.result;
        }
        else {
            args.AbortPipelineWithErrorMessage("Cannot obtain import statement for abstract processor path.");
        }

        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = args.abstractProcessor && !S(args.abstractProcessor.fileName).isEmpty();
        return safeCondition;
    }
}
