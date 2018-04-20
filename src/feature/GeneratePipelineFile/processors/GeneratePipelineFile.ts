import { GeneratePipelineFileProcessor } from "../GeneratePipelineFileProcessor";
import { GeneratePipelineFileArguments } from "../GeneratePipelineFileArguments";
import { GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export class GeneratePipelineFile extends GeneratePipelineFileProcessor {
    public static readonly Instance = new GeneratePipelineFile();

    public async SafeExecute(args: GeneratePipelineFileArguments): Promise<void> {
        let result = await GenerateFileFromTemplateExecutor.Instance.create(
            args.fileModel,
            args.yeomanGenerator,
            {
                processors: args.processors.map(x => x.options["className"])
            }
        );

        args.SetResultWithInformation(result.result, "Pipeline is created");
        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GeneratePipelineFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GeneratePipelineFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
