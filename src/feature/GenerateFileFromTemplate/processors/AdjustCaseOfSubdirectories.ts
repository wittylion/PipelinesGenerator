import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";

import path = require("path");
import S from "string";

export class AdjustCaseOfSubdirectories extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new AdjustCaseOfSubdirectories();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        const array = args.fileModel.subdirectories;
        for (let index = 0; index < array.length; index++) {
            array[index] = args.fileModel.subdirectoryNameTuner(array[index]);
        }
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = args.fileModel.subdirectories.length > 0 && !!args.fileModel.subdirectoryNameTuner;
        return safeCondition;
    }
}
