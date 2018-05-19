import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateAbstractProcessorFileArguments, GenerateAbstractProcessorFileExecutor } from "../../GenerateAbstractProcessorFile";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";

@injectable()
export class GenerateAbstractProcessor extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer,

    ) {
        super();

    }

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getAbstractProcessorModel();
        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories];
        model.destinationPath = await this.destination.ensure();

        let abstractProcessorGeneration = new GenerateAbstractProcessorFileArguments(
            model,
            this.yeomanGenerator,
            args.generatorsProvider.getFileFromTemplateGenerator(),
            args.pipelineNameSpecifiedByUser,
            args.generatedArguments.options["className"],
            args.generatedArguments.fileName
        );

        let result =
            await args.generatorsProvider
                .getAbstractProcessorGenerator()
                .execute(abstractProcessorGeneration);

        args.generatedProcessor = result.result;
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
