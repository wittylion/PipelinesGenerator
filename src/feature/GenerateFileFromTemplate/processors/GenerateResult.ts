import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");
import { CreatedFileResult } from "../models/CreatedFileResult";

export class GenerateResult extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new GenerateResult();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        if (S(args.destination).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                "Destination path was not created."
            );
            return;
        }

        if (!args.yeomanGenerator.fs.exists(args.destination)) {
            args.AbortPipelineWithErrorMessage("The file '" + args.destination + "' was not created, please review passed data or contact developers.");
            return;
        }

        let res = new CreatedFileResult();
        res.className = args.fileModel.className;
        res.fileName = args.fileModel.fileName;
        args.result = res;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
