import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureFileNameIsSet extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureFileNameIsSet();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.fileName = args.className;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = S(args.fileName).isEmpty() && !S(args.className).isEmpty();
        return safeCondition;
    }
}
