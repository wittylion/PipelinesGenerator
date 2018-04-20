import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import _ from "lodash";

export class FillCreationOptions extends GenerateFileFromTemplateProcessor {
    public static readonly Instance = new FillCreationOptions();

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        args.creationOptions["name"] = args.fileModel.options["className"];

        _.assign(
            args.creationOptions,
            args.fileModel.options
        );
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
