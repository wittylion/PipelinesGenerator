import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";

export class CheckAbstractProcessor extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckAbstractProcessor();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        if (!args.abstractProcessor) {
            args.abstractProcessor = new CreatedFileResult("AbstractProcessor", {});
        }

        if (S(args.abstractProcessor.options["className"]).isEmpty()) {
            args.abstractProcessor.options["className"] = "MyAbstractProcessor";
        }

        if (S(args.abstractProcessor.fileName).isEmpty()) {
            args.abstractProcessor.fileName = "AbstractProcessor"
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
