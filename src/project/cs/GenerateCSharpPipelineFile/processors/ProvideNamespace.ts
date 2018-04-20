import { GeneratePipelineFileArguments } from "../../../../feature/GeneratePipelineFile";
import { GeneratePipelineFileProcessor } from "../../../../feature/GeneratePipelineFile/GeneratePipelineFileProcessor";

export class ProvideNamespace extends GeneratePipelineFileProcessor {
    public static readonly Instance = new ProvideNamespace();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
