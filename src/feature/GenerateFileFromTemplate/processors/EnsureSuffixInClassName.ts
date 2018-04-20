import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureSuffixInClassName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureSuffixInClassName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.fileModel.options["className"] = S(args.fileModel.options["className"]).ensureRight(args.fileModel.suffix).s;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = args.fileModel.ensureSuffixInClassName
            && !S(args.fileModel.suffix).isEmpty()
            && !S(args.fileModel.options["className"]).isEmpty();
        return safeCondition;
    }
}
