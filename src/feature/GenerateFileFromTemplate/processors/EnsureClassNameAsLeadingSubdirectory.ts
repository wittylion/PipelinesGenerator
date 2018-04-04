import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import S from "string";

export class EnsureClassNameAsLeadingSubdirectory extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureClassNameAsLeadingSubdirectory();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.fileModel.subdirectories = [args.fileModel.className, ...args.fileModel.subdirectories];
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = args.ensureLeadingClassNameSubdirectory && S(args.destination).isEmpty();
        return safeCondition;
    }
}
