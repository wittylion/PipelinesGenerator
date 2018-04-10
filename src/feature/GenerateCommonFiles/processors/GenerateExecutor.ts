import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateExecutorFileArguments, GenerateExecutorFileExecutor } from "../../GenerateExecutorFile";
import { InteractionModeEnum } from "../../EnsureFileModel/InteractionModeEnum";

export class GenerateExecutor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateExecutor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getExecutorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        let executorGeneration = new GenerateExecutorFileArguments(
            model,
            args.yeomanGenerator,
            args.pipelineNameSpecifiedByUser,
            args.extension,
            InteractionModeEnum.Minimum
        );

        if (!S(args.generatedArgumentsClassName).isEmpty()) {
            executorGeneration.argumentsClassName = args.generatedArgumentsClassName;
        }
        else {
            args.AddWarning("Cannot obtain arguments class name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedArgumentsFileName).isEmpty()) {
            executorGeneration.argumentsFileName
                = path.basename(args.generatedArgumentsFileName, args.extension);
        }
        else {
            args.AddWarning("Cannot obtain arguments file name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedPipelineClassName).isEmpty()) {
            executorGeneration.pipelineClassName = args.generatedPipelineClassName;
        }
        else {
            args.AddWarning("Cannot obtain pipeline class name during the 'Pipeline executor' creation.");
        }

        if (!S(args.generatedPipelineFileName).isEmpty()) {
            executorGeneration.pipelineFileName
                = path.basename(args.generatedPipelineFileName, args.extension);
        }
        else {
            args.AddWarning("Cannot obtain pipeline file name during the 'Pipeline executor' creation.");
        }

        await args.generatorsProvider.getExecutorGenerator().execute(executorGeneration);

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
