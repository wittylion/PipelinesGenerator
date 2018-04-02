import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";

export class GenerateArguments extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateArguments();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.argumentsModel;
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for arguments generation.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name to generate arguments.");
            return;
        }

        if (S(model.className).isEmpty()) {
            model.className = args.pipelineNameSpecifiedByUser;
        }

        if (S(model.fileName).isEmpty()) {
            model.fileName = args.pipelineNameSpecifiedByUser;
        }

        let subfolders = [...args.commonSubfolders, ...model.subdirectories];

        let argumentsGeneration = new GenerateFileFromTemplateArguments();

        argumentsGeneration.className = model.className;
        argumentsGeneration.extension = args.extension;
        argumentsGeneration.subdirectoriesNames = subfolders;
        argumentsGeneration.templateFileName = model.templateName;
        argumentsGeneration.yeomanGenerator = args.yeomanGenerator;
        argumentsGeneration.suffix = "Arguments";
        argumentsGeneration.ensureSuffixInFileName = true;
        argumentsGeneration.ensureSuffixInClassName = true;

        await GenerateFileFromTemplateExecutor.Instance.execute(argumentsGeneration);

        model.generatedClassName = argumentsGeneration.className;
        model.generatedFileName = argumentsGeneration.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
