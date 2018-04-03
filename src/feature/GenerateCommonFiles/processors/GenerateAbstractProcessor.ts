import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");

export class GenerateAbstractProcessor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateAbstractProcessor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.abstractProcessorModel = args.modelsProvider.getAbstractProcessorModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for abstract processor generation.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name to generate abstract processor.");
            return;
        }

        if (S(model.className).isEmpty()) {
            model.className = args.pipelineNameSpecifiedByUser;
        }

        if (S(model.fileName).isEmpty()) {
            model.fileName = args.pipelineNameSpecifiedByUser;
        }

        if (S(args.argumentsModel.generatedClassName).isEmpty() || S(args.argumentsModel.generatedFileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("Arguments must be created before abstract processor will be created.");
        }

        let subfolders = [...args.commonSubfolders, ...model.subdirectories];
        let argsPath =
            path.basename(
                path.relative(
                    path.join(...subfolders),
                    args.yeomanGenerator.destinationPath(args.argumentsModel.generatedFileName)
                ), args.extension);

        let abstractProcessorGeneration = new GenerateFileFromTemplateArguments();

        abstractProcessorGeneration.className = model.className;
        abstractProcessorGeneration.fileName = model.fileName;
        abstractProcessorGeneration.extension = args.extension;
        abstractProcessorGeneration.subdirectoriesNames = subfolders;
        abstractProcessorGeneration.ensureSuffixInClassName = true;
        abstractProcessorGeneration.ensureSuffixInFileName = true;
        abstractProcessorGeneration.templateFileName = model.templateName;
        abstractProcessorGeneration.yeomanGenerator = args.yeomanGenerator;
        abstractProcessorGeneration.creationOptions['argumentsClassName'] = args.argumentsModel.generatedClassName;
        abstractProcessorGeneration.creationOptions['argumentsFileName'] = argsPath;
        abstractProcessorGeneration.suffix = "Processor";
        abstractProcessorGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(abstractProcessorGeneration);

        model.generatedClassName = abstractProcessorGeneration.className;
        model.generatedFileName = abstractProcessorGeneration.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = !!args.abstractProcessorModel;
        return safeCondition;
    }
}
