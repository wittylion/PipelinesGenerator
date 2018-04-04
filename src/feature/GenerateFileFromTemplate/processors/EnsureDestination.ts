import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import path = require("path");
import S from "string";

export class EnsureDestination extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new EnsureDestination();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.fileModel.fileName = path.join(...args.fileModel.subdirectories, args.fileModel.fileName);
        args.destination = args.yeomanGenerator.destinationPath(args.fileModel.fileName);
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = S(args.destination).isEmpty() && !S(args.fileModel.fileName).isEmpty();
        return safeCondition;
    }
}
