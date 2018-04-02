import { GenerateAbstractProcessor } from "../GenerateAbstractProcessor";
import { GenerateAbstractProcessorArguments } from "../GenerateAbstractProcessorArguments";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from '../../../../feature/GenerateFileFromTemplate'
import { MessageFilter } from "solid-pipelines";

export class ExecuteGenerator extends GenerateAbstractProcessor {
    public static readonly Instance = new ExecuteGenerator();

    public async SafeExecute(args: GenerateAbstractProcessorArguments): Promise<void> {
        let generatorArguments = new GenerateFileFromTemplateArguments();

        generatorArguments.className = args.className;
        generatorArguments.extension = ".ts";
        generatorArguments.ensureLeadingClassNameSubdirectory = args.createSubdirectory;
        generatorArguments.ensureSuffixInClassName = args.ensureSuffixInClassName;
        generatorArguments.ensureSuffixInFileName = args.ensureSuffixInFileName;
        generatorArguments.fileName = args.fileName;
        generatorArguments.templateFileName = args.templateFileName;
        generatorArguments.yeomanGenerator = args.yeomanGenerator;
        generatorArguments.creationOptions['argumentsClassName'] = args.argumentsClassName;
        generatorArguments.creationOptions['argumentsFileName'] = args.argumentsFileName;
        generatorArguments.suffix = "Processor";

        await GenerateFileFromTemplateExecutor.Instance.execute(generatorArguments);

        // In case name of the pipeline was modified during the file creation:
        args.className = generatorArguments.className;
        args.fileName = generatorArguments.fileName;

        let messages = generatorArguments.GetMessages(MessageFilter.All);
        if (messages.length > 0) {
            console.log(messages);
        }
    }

    public SafeCondition(args: GenerateAbstractProcessorArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
