import { GenerateTypescriptArgumentsProcessor } from "../GenerateTypescriptArgumentsProcessor";
import { GenerateTypescriptArguments } from "../GenerateTypescriptArguments";
import S from "string";

export class EnsureTemplateFileName extends GenerateTypescriptArgumentsProcessor {
    public static readonly Instance = new EnsureTemplateFileName();
    public static DefaultTemplate = "_arguments.ts.ejs";

    public async SafeExecute(args: GenerateTypescriptArguments): Promise<void> {
        args.templateFileName = EnsureTemplateFileName.DefaultTemplate;
    }

    public SafeCondition(args: GenerateTypescriptArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptArguments): boolean {
        let safeCondition = S(args.templateFileName).isEmpty();
        return safeCondition;
    }
}
