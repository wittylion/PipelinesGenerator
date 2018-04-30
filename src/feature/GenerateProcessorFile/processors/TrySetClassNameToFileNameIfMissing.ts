import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import S from "string";
import { GenerateProcessorModel } from "../models/GenerateProcessorModel";

export class TrySetClassNameToFileNameIfMissing extends GenerateProcessorFileProcessor {
    public static readonly Instance = new TrySetClassNameToFileNameIfMissing();

    public async SafeExecute(args: GenerateProcessorModel): Promise<void> {
        args.fileName = args.options["className"];
    }

    public SafeCondition(args: GenerateProcessorModel): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorModel): boolean {
        let safeCondition = S(args.fileName).isEmpty() && !S(args.options["className"]).isEmpty();
        return safeCondition;
    }
}
