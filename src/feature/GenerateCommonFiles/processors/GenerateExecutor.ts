import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");

export class GenerateExecutor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateExecutor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getExecutorModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for executor file to be generated.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name for executor file to be generated.");
            return;
        }

        if (S(model.className).isEmpty()) {
            model.className = args.pipelineNameSpecifiedByUser;
        }

        if (S(model.fileName).isEmpty()) {
            model.fileName = args.pipelineNameSpecifiedByUser;
        }

        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        let executorGeneration = new GenerateFileFromTemplateArguments();

        executorGeneration.fileModel = model;
        executorGeneration.yeomanGenerator = args.yeomanGenerator;
        executorGeneration.creationOptions['argumentsClassName'] = args.generatedArgumentsClassName;
        executorGeneration.creationOptions['argumentsFileName']
            = path.basename(args.generatedArgumentsFileName, args.extension);
        executorGeneration.creationOptions['pipelineClassName'] = args.generatedPipelineClassName;
        executorGeneration.creationOptions['pipelineFileName']
            = path.basename(args.generatedPipelineFileName, args.extension);
        executorGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(executorGeneration);
        
        args.generatedExecutorClassName = executorGeneration.fileModel.className;
        args.generatedExecutorFileName = executorGeneration.fileModel.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
