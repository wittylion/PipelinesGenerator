import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { ObtainOptionExecutor } from "../../ObtainOption";
import { GenerateArgumentsFileOptions } from "../../GenerateArgumentsFile/GenerateArgumentsFileOptions";
import S from "string";
import { GenerateAbstractProcessorFileOptions } from "../../GenerateAbstractProcessorFile/GenerateAbstractProcessorFileOptions";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { MessageType, PipelineExecutor } from "solid-pipelines";

import Generator = require("yeoman-generator");
import fs = require("fs");
import { GenerateProcessorFromScratchArguments, GenerateProcessorFromScratchExecutor } from "../../GenerateProcessorFromScratch";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import GENERATE_COMMON_FILES from "../../GenerateCommonFiles/ServiceIdentifiers";
import { IModelsProvider } from "../../GenerateCommonFiles/IModelsProvider";
import { IGeneratorsProvider } from "../../GenerateCommonFiles/abstractions/IGeneratorsProvider";
import GENERATE_PROCESSOR_FROM_SCRATCH from "../../GenerateProcessorFromScratch/ServiceIdentifiers";
import GENERATE_PROCESSOR_FILE from "../../GenerateProcessorFile/ServiceIdentifiers";

@injectable()
export class CreateProcessorWhenUserSelectedAnOption extends ProgramFlowProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        private modelsProvider: IModelsProvider,

        @inject(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        private generatorsProvider: IGeneratorsProvider,

        @inject(GENERATE_PROCESSOR_FROM_SCRATCH.EXECUTOR)
        private generateProcessorFromScratch: PipelineExecutor,

        @inject(GENERATE_PROCESSOR_FILE.EXECUTOR)
        private generateProcessor: GenerateProcessorFileExecutor,
    ) {
        super();
    }

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let model = this.modelsProvider.getProcessorModel();

        let processorGeneration = new GenerateProcessorFromScratchArguments(
            this.generatorsProvider.getFileFromTemplateGenerator(),
            this.generateProcessor,
            model
        );

        if (!fs.existsSync(
            this.yeomanGenerator.destinationPath(model.getSubdirectory()))) {
            model.subdirectories = [];
        }

        let result
            = await this.generateProcessorFromScratch.Execute(processorGeneration);

        let failMessages = processorGeneration.GetWarningsAndErrors();

        if (failMessages.length > 0) {
            args.AbortPipelineWithErrorMessage("Cannot create a processor");
        }
        else {
            args.AbortPipelineWithInformationMessage("Processor is created.");
        }

        args.AddMessageObjects(failMessages);
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = args.selectedDesiredFlow === "createProcessor";
        return safeCondition;
    }
}
