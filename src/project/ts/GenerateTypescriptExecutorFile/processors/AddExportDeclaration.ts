import { GenerateExecutorFileArguments } from "../../../../feature/GenerateExecutorFile";
import { GenerateExecutorFileProcessor } from "../../../../feature/GenerateExecutorFile/GenerateExecutorFileProcessor";
import { GenerateExportsExecutor } from "../../GenerateExports";

import path = require("path");

export class AddExportDeclaration extends GenerateExecutorFileProcessor {
    public static readonly Instance = new AddExportDeclaration();

    public async SafeExecute(args: GenerateExecutorFileArguments): Promise<void> {
        let res = await GenerateExportsExecutor.exportAllFiles(
            args.yeomanGenerator,
            path.join(...args.fileModel.subdirectories),
            args.fileModel.fileName
        );

        args.AddMessageObjects(res.messages);
    }

    public SafeCondition(args: GenerateExecutorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExecutorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
