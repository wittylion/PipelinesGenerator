import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileMessages } from "../GenerateProcessorFileMessages";
import S from "string";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";

export class CheckFileName extends GenerateProcessorFileProcessor {
    public static readonly Instance = new CheckFileName();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        if (S(args.fileName).isEmpty()) {
            args.fileName = "MyProcessor";
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
