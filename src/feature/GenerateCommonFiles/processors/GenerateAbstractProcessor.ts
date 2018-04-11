import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateAbstractProcessorFileArguments, GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import { GenerateTypescriptPathExecutor } from "../../../foundation/GenerateTypescriptPath";

export class GenerateAbstractProcessor extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateAbstractProcessor();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getAbstractProcessorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];

        let importPath = await GenerateTypescriptPathExecutor.Instance.getPath(
            args.yeomanGenerator.destinationPath(
                model.getSubdirectory()),
            args.generatedArgumentsFileName);

        args.AddMessageObjects(importPath.messages);

        let argsPath = importPath.result;

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
