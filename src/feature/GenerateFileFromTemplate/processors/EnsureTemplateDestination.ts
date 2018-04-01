import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import S = require("string");

export class EnsureTemplateDestination extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureTemplateDestination();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.templateDestination = args.yeomanGenerator.templatePath(args.templateFileName);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = !S(args.templateFileName).isEmpty() && S(args.templateDestination).isEmpty();
        return safeCondition;
    }
}
