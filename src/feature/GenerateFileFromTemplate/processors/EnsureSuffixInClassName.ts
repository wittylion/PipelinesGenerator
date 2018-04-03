import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureSuffixInClassName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureSuffixInClassName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.className = S(args.className).ensureRight(args.suffix).s;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = args.ensureSuffixInClassName && !S(args.suffix).isEmpty() && !S(args.className).isEmpty();
        return safeCondition;
    }
}
