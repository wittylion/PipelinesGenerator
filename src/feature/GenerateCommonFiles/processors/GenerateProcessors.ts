import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import upath = require("upath");
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { MessageFilter } from "solid-pipelines";
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";

@injectable()
export class GenerateProcessors extends GenerateCommonPipelineFilesProcessor {

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {

        let processorsModels = args.processorNamesSpecifiedByUser.map(processor => {
            let model = args.modelsProvider.getProcessorModel();
            model.options["className"] = processor;
            model.fileName = processor;
            return model;
        });

        for (const processorModel of processorsModels) {
            processorModel.subdirectories = [...args.commonSubfolders, ...processorModel.subdirectories];

            processorModel.arguments = args.generatedArguments;
            processorModel.abstractProcessor = args.generatedProcessor;
            await args.generatorsProvider.getProcessorGenerator().execute(processorModel);

            let result = new CreatedFileResult(
                processorModel.getFinalDestination(),
                processorModel.options
            );
            args.generatedProcessors.push(result);
        }
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorNamesSpecifiedByUser.length > 0;
        return safeCondition;
    }
}
