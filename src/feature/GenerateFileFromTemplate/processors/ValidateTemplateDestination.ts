import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");
import { FileExistanceChecker } from "../../../foundation/TypeDefinitions/CheckFileExistance";

export class ValidateTemplateDestination extends GenerateFileFromTemplateProcessor {

    constructor(public checker: FileExistanceChecker) {
        super();
    }

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        if (S(args.templateDestination).isEmpty()) {
            if (S(args.fileModel.templateName).isEmpty()) {
                args.AbortPipelineWithErrorMessage("We couldn't find a pipeline template. You have to provide a templpate file name, so we can create a pipeline from this file.");
            }
            else {
                args.AbortPipelineWithErrorMessage("Something went wrong and we couldn't find a template directory or file in it. Please contact developers if you see this message.");
            }

            return;
        }

        let templateExists = this.checker.check(args.templateDestination);
        if (!templateExists) {
            args.AbortPipelineWithErrorMessage("The file in '" + args.templateDestination + "' templpate destination was not found. Please ensure the existence of the file and try again.");
            return;
        }
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
