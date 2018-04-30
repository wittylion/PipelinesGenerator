import S from "string";

import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateTypescriptPathExecutor } from "../../GenerateTypescriptPath/GenerateTypescriptPathExecutor";
import { GenerateProcessorModel } from "../../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

export class GenerateArgumentsImportStatement extends GenerateProcessorFileProcessor {
    public static readonly Instance = new GenerateArgumentsImportStatement();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        let result
            = await GenerateTypescriptPathExecutor.getPath(
                args.getFinalDirectoryDestination(),
                args.arguments.fileName
            );

        if (result.result) {
            args.options["argumentsFileName"] = result.result;
        }
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = args.arguments && !S(args.arguments.fileName).isEmpty();
        return safeCondition;
    }
}
