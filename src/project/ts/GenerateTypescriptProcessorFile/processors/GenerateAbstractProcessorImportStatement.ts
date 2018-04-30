import S from "string";
import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateTypescriptPathExecutor } from "../../GenerateTypescriptPath/GenerateTypescriptPathExecutor";
import { GenerateProcessorModel } from "../../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

export class GenerateAbstractProcessorImportStatement extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateAbstractProcessorImportStatement();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        let result
            = await GenerateTypescriptPathExecutor.getPath(
                args.getFinalDirectoryDestination(),
                args.abstractProcessor.fileName
            );

        if (result.result) {
            args.options["abstractProcessorFileName"] = result.result;
        }
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = args.abstractProcessor && !S(args.abstractProcessor.fileName).isEmpty();
        return safeCondition;
    }
}
