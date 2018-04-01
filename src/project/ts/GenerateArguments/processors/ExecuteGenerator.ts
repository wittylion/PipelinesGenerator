import { GenerateTypescriptArgumentsProcessor } from "../GenerateTypescriptArgumentsProcessor";
import { GenerateTypescriptArguments } from "../GenerateTypescriptArguments";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from '../../../../feature/GenerateFileFromTemplate'
import { MessageFilter } from "solid-pipelines";

export class ExecuteGenerator extends GenerateTypescriptArgumentsProcessor {
    public static readonly Instance = new ExecuteGenerator();

    public async SafeExecute(args: GenerateTypescriptArguments): Promise<void> {
        let generatorArguments = new GenerateFileFromTemplateArguments();

        generatorArguments.className = args.argumentsName;
        generatorArguments.extension = ".ts";
        generatorArguments.createSubdirectory = args.createSubdirectory;
        generatorArguments.ensureSuffixInClassName = args.ensureArgumentsSuffixInClassName;
        generatorArguments.ensureSuffixInFileName = args.ensureArgumentsSuffixInFileName;
        generatorArguments.fileName = args.argumentsFileName;
        generatorArguments.templateFileName = args.templateFileName;
        generatorArguments.creationOptions['processors'] = args.processorsNames;
        generatorArguments.yeomanGenerator = args.yeomanGenerator;
        generatorArguments.suffix = "Arguments";

        await GenerateFileFromTemplateExecutor.Instance.execute(generatorArguments);

        // In case name of the pipeline was modified during the file creation:
        args.argumentsName = generatorArguments.className;
        args.argumentsFileName = generatorArguments.fileName;

        let messages = generatorArguments.GetMessages(MessageFilter.All);
        if (messages.length > 0) {
            console.log(messages);
        }
    }

    public SafeCondition(args: GenerateTypescriptArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateTypescriptArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
