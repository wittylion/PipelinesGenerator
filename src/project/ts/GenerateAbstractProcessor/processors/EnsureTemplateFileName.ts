import { GenerateAbstractProcessor } from "../GenerateAbstractProcessor";
import { GenerateAbstractProcessorArguments } from "../GenerateAbstractProcessorArguments";
import S from "string";

export class EnsureTemplateFileName extends GenerateAbstractProcessor {
    public static readonly Instance = new EnsureTemplateFileName();
    public static DefaultTemplate: string = "_abstractProcessor.ts.ejs";

    public async SafeExecute(args: GenerateAbstractProcessorArguments): Promise<void> {
        args.templateFileName = EnsureTemplateFileName.DefaultTemplate;
    }

    public SafeCondition(args: GenerateAbstractProcessorArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorArguments): boolean {
        let safeCondition = S(args.templateFileName).isEmpty();
        return safeCondition;
    }
}
