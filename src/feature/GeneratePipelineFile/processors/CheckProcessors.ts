import { GeneratePipelineFileProcessor } from "../GeneratePipelineFileProcessor";
import { GeneratePipelineFileArguments } from "../GeneratePipelineFileArguments";
import { GeneratePipelineFileMessages } from "../GeneratePipelineFileMessages";

export class CheckProcessors extends GeneratePipelineFileProcessor {
    public static readonly Instance = new CheckProcessors();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        if (!args.processors) {
            args.AddWarning(GeneratePipelineFileMessages.ProcessorsAreNotAvailable);
        }

        if (args.processors.length === 0) {
            args.AddWarning(GeneratePipelineFileMessages.NoProcessorsFoundInArray);
        }
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
