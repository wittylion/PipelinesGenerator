import { GenerateTypescriptPipelineProcessor } from "../GenerateTypescriptPipelineProcessor";
import { GenerateTypescriptPipelineArguments } from "../GenerateTypescriptPipelineArguments";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from '../../../../feature/GenerateFileFromTemplate'
import { MessageFilter } from "solid-pipelines";

export class ExecuteGenerator extends GenerateTypescriptPipelineProcessor {
    public static readonly Instance = new ExecuteGenerator();

    public async SafeExecute(args: GenerateTypescriptPipelineArguments): Promise<void> {
        let generatorArguments = new GenerateFileFromTemplateArguments();

        generatorArguments.className = args.pipelineName;
        generatorArguments.extension = ".ts";
        generatorArguments.createSubdirectory = args.createSubdirectory;
        generatorArguments.ensureSuffixInClassName = args.ensurePipelineSuffixInClassName;
        generatorArguments.ensureSuffixInFileName = args.ensurePipelineSuffixInFileName;
        generatorArguments.fileName = args.pipelineFileName;
        generatorArguments.templateFileName = '_pipeline.ts.ejs';
        generatorArguments.creationOptions['processors'] = args.processorsNames;
        generatorArguments.yeomanGenerator = args.yeomanGenerator;
        generatorArguments.suffix = "Pipeline";

        await GenerateFileFromTemplateExecutor.Instance.execute(generatorArguments);

        // In case name of the pipeline was modified during the file creation:
        args.pipelineName = generatorArguments.className;
        args.pipelineFileName = generatorArguments.fileName;

        let messages = args.GetMessages(MessageFilter.All);
        if (messages.length > 0) {
            console.log(messages);
        }
    }

    public SafeCondition(args: GenerateTypescriptPipelineArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptPipelineArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
