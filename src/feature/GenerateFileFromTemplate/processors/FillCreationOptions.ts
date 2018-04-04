import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

export class FillCreationOptions extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new FillCreationOptions();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.creationOptions["name"] = args.fileModel.className;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
