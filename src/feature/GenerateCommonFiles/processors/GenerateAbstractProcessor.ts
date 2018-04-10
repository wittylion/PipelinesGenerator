import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateAbstractProcessorFileArguments, GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";

export class GenerateAbstractProcessor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateAbstractProcessor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getAbstractProcessorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        let argsPath =
            path.basename(
                path.relative(
                    args.yeomanGenerator.destinationRoot(),
                    args.yeomanGenerator.destinationPath(args.generatedArgumentsFileName)
                ), args.extension);

        let abstractProcessorGeneration = new GenerateAbstractProcessorFileArguments(
            model,
            args.yeomanGenerator,
            args.pipelineNameSpecifiedByUser,
            args.extension,
            args.generatedArgumentsClassName,
            argsPath
        );

        await args.generatorsProvider.getAbstractProcessorGenerator().execute(abstractProcessorGeneration);

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
