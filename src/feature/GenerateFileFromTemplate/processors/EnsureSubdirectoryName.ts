import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import S from "string";

export class EnsureSubdirectoryName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureSubdirectoryName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.subdirectoryName = args.className;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = args.createSubdirectory && S(args.subdirectoryName).isEmpty() && S(args.destination).isEmpty();
        return safeCondition;
    }
}
