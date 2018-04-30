import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

export class CheckArguments extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckArguments();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        if (!args.arguments) {
            args.arguments = new CreatedFileResult("Arguments", {});
        }

        if (S(args.arguments.options["className"]).isEmpty()) {
            args.arguments.options["className"] = "MyArguments";
        }

        if (S(args.arguments.fileName).isEmpty()) {
            args.arguments.fileName = "Arguments";
        }
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
