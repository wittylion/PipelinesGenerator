import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");

export class GenerateAbstractProcessor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateAbstractProcessor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getAbstractProcessorModel();
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

        if (S(args.generatedArgumentsClassName).isEmpty() || S(args.generatedArgumentsFileName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("Arguments must be created before abstract processor will be created.");
            return;
        }

        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        let argsPath =
            path.basename(
                path.relative(
                    args.yeomanGenerator.destinationRoot(),
                    args.yeomanGenerator.destinationPath(args.generatedArgumentsFileName)
                ), args.extension);

        let abstractProcessorGeneration = new GenerateFileFromTemplateArguments();

        abstractProcessorGeneration.fileModel = model;
        abstractProcessorGeneration.yeomanGenerator = args.yeomanGenerator;
        abstractProcessorGeneration.creationOptions['argumentsClassName'] = args.generatedArgumentsClassName;
        abstractProcessorGeneration.creationOptions['argumentsFileName'] = argsPath;

        await GenerateFileFromTemplateExecutor.Instance.execute(abstractProcessorGeneration);

        args.generatedProcessorClassName = abstractProcessorGeneration.fileModel.className;
        args.generatedProcessorFileName = abstractProcessorGeneration.fileModel.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
