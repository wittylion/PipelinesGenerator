import { GenerateProcessorFileArguments } from "../../../../feature/GenerateProcessorFile";
import { GenerateProcessorFileProcessor } from "../../../../feature/GenerateProcessorFile/GenerateProcessorFileProcessor";
import { GenerateExportsExecutor } from "../../GenerateExports";

import path = require("path");

export class UpdateExportsFile extends GenerateProcessorFileProcessor {
    public static readonly Instance = new UpdateExportsFile();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        await GenerateExportsExecutor.exportAllFiles(
            args.yeomanGenerator,
            path.join(...args.fileModel.subdirectories),
            args.fileModel.fileName
        );
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
