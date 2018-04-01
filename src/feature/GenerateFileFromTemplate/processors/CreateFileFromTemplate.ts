import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

export class CreateFileFromTemplate extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new CreateFileFromTemplate();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.yeomanGenerator.fs.copyTpl(
            args.templateDestination,
            args.destination,
            args.creationOptions);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
