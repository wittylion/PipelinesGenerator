import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import S from "string";

export class EnsureSuffixInFileName extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureSuffixInFileName();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        let fileName = S(args.fileModel.fileName);
        if (fileName.endsWith(args.fileModel.extension)) {
            fileName = fileName.chompRight(args.fileModel.extension);
        }

        args.fileModel.fileName = fileName.ensureRight(args.fileModel.suffix).s;
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition =
            args.fileModel.ensureSuffixInFileName
            && S(args.destination).isEmpty()
            && !S(args.fileModel.suffix).isEmpty()
            && !S(args.fileModel.fileName).isEmpty();
        return safeCondition;
    }
}
