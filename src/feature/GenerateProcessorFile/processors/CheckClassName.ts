import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";

export class CheckClassName extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckClassName();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        if (S(args.options["className"]).isEmpty()) {
            args.options["className"] = "MyProcessor";
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
