import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureFileNameIsSet extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureFileNameIsSet();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        if (S(args.fileModel.options["className"]).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide either file name or class name to generate a file.");
            return;
        }

        args.fileModel.fileName = args.fileModel.options["className"];
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = S(args.fileModel.fileName).isEmpty() && !S(args.fileModel.options["className"]).isEmpty();
        return safeCondition;
    }
}
