import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { ResolveFileDependencyExecutor } from "../../../foundation/ResolveFileDependency";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

import upath from "upath";
import { GenerateProcessorFromScratchMessages } from "../GenerateProcessorFromScratchMessages";

export class EnsureArgumentsData extends GenerateProcessorFromScratchProcessor {
    public static readonly Instance = new EnsureArgumentsData();

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        args.yeomanGenerator.log(GenerateProcessorFromScratchMessages.ProvideArguments);

        let resolveResult = await ResolveFileDependencyExecutor.resolveFile(
            args.yeomanGenerator,
            "arguments",
            args.model.getFinalName().replace("Processor", "Arguments"),
            args.yeomanGenerator.destinationPath(args.model.getSubdirectory())
        );

        let path = resolveResult.result;
        if (path) {
            let className = upath.trimExt(upath.basename(path));
            args.argumentsModel = new CreatedFileResult(path, { className : className });
        }

        args.AddMessageObjects(resolveResult.messages);
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = !args.argumentsModel;
        return safeCondition;
    }
}
