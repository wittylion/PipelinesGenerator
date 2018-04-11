import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import upath = require("upath");
import { GenerateProcessorFileArguments, GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { MessageFilter } from "solid-pipelines";

export class GenerateProcessors extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessors();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {

        let processorsModels = args.processorsNames.map(processor => {
            let model = args.modelsProvider.getProcessorModel();
            model.className = processor;
            model.fileName = processor;
            return model;
        });

        for (const model of processorsModels) {
            model.subdirectories = [...args.commonSubfolders, ...model.subdirectories, 'processors'];

            let processorGeneration = new GenerateProcessorFileArguments(
                model,
                args.yeomanGenerator
            );

            processorGeneration.argumentsClassName = args.generatedArgumentsClassName;
            processorGeneration.argumentsFileName
                = upath.trimExt(upath.basename(
                    args.generatedArgumentsFileName
                ));

            processorGeneration.abstractProcessorClassName = args.generatedProcessorClassName;
            processorGeneration.abstractProcessorFileName
                = upath.trimExt(upath.basename(
                    args.generatedProcessorFileName
                ));

            await args.generatorsProvider.getProcessorGenerator().execute(processorGeneration);

            args.processorsFileNames.push(processorGeneration.fileModel.fileName);
        }
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.length > 0;
        return safeCondition;
    }
}
