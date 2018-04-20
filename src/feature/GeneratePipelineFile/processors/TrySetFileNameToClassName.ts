import { GeneratePipelineFileProcessor } from "../GeneratePipelineFileProcessor";
import { GeneratePipelineFileArguments } from "../GeneratePipelineFileArguments";
import S from "string";

export class TrySetFileNameToClassName extends GeneratePipelineFileProcessor {
    public static readonly Instance = new TrySetFileNameToClassName();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        args.fileModel.options["className"] = args.fileModel.fileName;
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = !S(args.fileModel.fileName).isEmpty() && S(args.fileModel.options["className"]).isEmpty();
        return safeCondition;
    }
}
