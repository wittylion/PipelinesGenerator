import { GeneratePipelineProcessor } from "../GeneratePipelineProcessor";
import { GeneratePipelineArguments } from "../GeneratePipelineArguments";

export class CreatePipelineFileFromTemplate extends GeneratePipelineProcessor {
    public static readonly Instance = new CreatePipelineFileFromTemplate();

    public async SafeExecute(args: GeneratePipelineArguments): Promise<void> {
        throw new Error("Not implemented.");
    }

    public SafeCondition(args: GeneratePipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
