import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";

export class CreatePipelineFileFromTemplate extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new CreatePipelineFileFromTemplate();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        await new Promise((resolve) => {
            this.CustomExecution(args);
            resolve();
        });
    }

    public CustomExecution(args: GenerateTypescriptPipelineArguments): void {
        args.yeomanGenerator.fs.copyTpl(
            args.templateDestination,
            args.pipelineDestination,
            args.creationOptions);
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
