import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureExtensionInFileName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureExtensionInFileName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.fileName = S(args.fileName).ensureRight(args.extension).s;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = !S(args.fileName).isEmpty();
        return safeCondition;
    }
}
