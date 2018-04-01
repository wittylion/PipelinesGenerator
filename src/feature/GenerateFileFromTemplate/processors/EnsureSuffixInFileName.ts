import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import S from "string";

export class EnsureSuffixInFileName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureSuffixInFileName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        let fileName = S(args.fileName);
        if (fileName.endsWith(args.extension)) {
            fileName = fileName.chompRight(args.extension);
        }

        args.fileName
            = fileName
                .ensureRight(args.suffix)
                .ensureRight(args.extension).s;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition =
            args.ensureSuffixInFileName
            && S(args.destination).isEmpty()
            && !S(args.suffix).isEmpty();
        return safeCondition;
    }
}
