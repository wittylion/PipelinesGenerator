import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");
import { CreatedFileResult } from "../models/CreatedFileResult";

export class GenerateResult extends GenerateFileFromTemplateProcessor {

    constructor(public existanceChecker: FileExistanceChecker) {
        super();
    }

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        if (S(args.destination).isEmpty()) {
            args.AbortPipelineWithErrorMessage(
                "Destination path was not created."
            );
            return;
        }

        let fileExists = await this.existanceChecker.check(args.destination);
        if (!fileExists) {
            args.AbortPipelineWithErrorMessage("The file '" + args.destination + "' was not created, please review passed data or contact developers.");
            return;
        }

        args.result = new CreatedFileResult(args.fileModel.fileName, args.fileModel.options);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
