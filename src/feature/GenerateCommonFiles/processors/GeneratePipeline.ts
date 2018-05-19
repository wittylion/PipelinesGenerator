import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { MessageFilter } from "solid-pipelines";
import { GeneratePipelineFileExecutor } from "../../GeneratePipelineFile";
import _ from "lodash";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";

@injectable()
export class GeneratePipeline extends GenerateCommonPipelineFilesProcessor {
    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer,

    ) {
        super();

    }


    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getPipelineModel();
        model.fileName = args.pipelineNameSpecifiedByUser;

        _.assign(
            model.options,
            {
                className: args.pipelineNameSpecifiedByUser,
                abstractProcessorClassName:
                    args.generatedProcessor
                        ? args.generatedProcessor.options["className"]
                        : "MyProcessor"
            }
        );

        model.destinationPath = await this.destination.ensure();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        let result = await args.generatorsProvider.getPipelineGenerator().create(
            model,
            this.yeomanGenerator,
            args.generatorsProvider.getFileFromTemplateGenerator(),
            args.generatedProcessors,
            args.generatedProcessor
        );

        args.generatedPipeline = result.result;
        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
