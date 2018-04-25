import { GenerateArgumentsFileProcessor } from "../../../../feature/GenerateArgumentsFile/GenerateArgumentsFileProcessor";
import { GenerateArgumentsFileArguments } from "../../../../feature/GenerateArgumentsFile";
import { GenerateExportsExecutor } from "../../GenerateExports";

import path = require("path");

export class UpdateExportsFile extends GenerateArgumentsFileProcessor {
    public static readonly Instance = new UpdateExportsFile();

    public async SafeExecute(args: GenerateArgumentsFileArguments): Promise<void> {
        let res = await GenerateExportsExecutor.exportAllFiles(
            args.yeomanGenerator,
            path.join(...args.fileModel.subdirectories),
            args.fileModel.fileName
        );

        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateArgumentsFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateArgumentsFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
