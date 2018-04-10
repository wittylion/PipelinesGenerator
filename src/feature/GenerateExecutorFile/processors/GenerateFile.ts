import { GenerateExecutorFileProcessor } from "../GenerateExecutorFileProcessor";
import { GenerateExecutorFileArguments } from "../GenerateExecutorFileArguments";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from "../../GenerateFileFromTemplate";
import _ from "lodash";

export class GenerateFile extends GenerateExecutorFileProcessor {
    public static readonly Instance = new GenerateFile();

    public async SafeExecute(args: GenerateExecutorFileArguments): Promise<void> {
        let executorGeneration = new GenerateFileFromTemplateArguments();

        executorGeneration.fileModel = args.fileModel;
        executorGeneration.yeomanGenerator = args.yeomanGenerator;

        _.assign(executorGeneration.creationOptions,
        {
            argumentsClassName: args.argumentsClassName,
            argumentsFileName: args.argumentsFileName,

            pipelineClassName: args.pipelineClassName,
            pipelineFileName: args.pipelineFileName
        });
        
        await GenerateFileFromTemplateExecutor.Instance.execute(executorGeneration);
    }

    public SafeCondition(args: GenerateExecutorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExecutorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
