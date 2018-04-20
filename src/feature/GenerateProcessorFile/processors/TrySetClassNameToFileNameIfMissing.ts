import { GenerateProcessorFileProcessor } from "../GenerateProcessorFileProcessor";
import { GenerateProcessorFileArguments } from "../GenerateProcessorFileArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import _ from "lodash";
import S from "string";

export class TrySetClassNameToFileNameIfMissing extends GenerateProcessorFileProcessor {
    public static readonly Instance = new TrySetClassNameToFileNameIfMissing();

    public async SafeExecute(args: GenerateProcessorFileArguments): Promise<void> {
        args.fileModel.fileName = args.fileModel.options["className"];
    }

    public SafeCondition(args: GenerateProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFileArguments): boolean {
        let safeCondition = S(args.fileModel.fileName).isEmpty() && !S(args.fileModel.options["className"]).isEmpty();
        return safeCondition;
    }
}
