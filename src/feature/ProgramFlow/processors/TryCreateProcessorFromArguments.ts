import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { GenerateProcessorFileExecutor } from "../../GenerateProcessorFile";
import { ObtainOptionExecutor } from "../../ObtainOption";
import { GenerateArgumentsFileOptions } from "../../GenerateArgumentsFile/GenerateArgumentsFileOptions";
import S from "string";
import { GenerateAbstractProcessorFileOptions } from "../../GenerateAbstractProcessorFile/GenerateAbstractProcessorFileOptions";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { MessageType } from "solid-pipelines";

import Generator = require("yeoman-generator");
import fs = require("fs");
import { CreatedFileResult } from "../../GenerateFileFromTemplate/models/CreatedFileResult";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import GENERATE_COMMON_FILES from "../../GenerateCommonFiles/ServiceIdentifiers";
import { IGeneratorsProvider } from "../../GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { IModelsProvider } from "../../GenerateCommonFiles/IModelsProvider";

@injectable()
export class TryCreateProcessorFromArguments extends ProgramFlowProcessor {
    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @inject(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        private modelsProvider: IModelsProvider,
        
        @inject(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        private generatorsProvider: IGeneratorsProvider
    ) {
        super();
    }

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {

        let processorName = await ObtainOptionExecutor.obtainByKey(
            this.yeomanGenerator,
            GenerateProcessorFileOptions.PROCESSOR_NAME
        );

        if (S(processorName).isEmpty() && !<any>processorName) {
            return;
        }

        let model = this.modelsProvider.getProcessorModel();
        model.options["className"] = processorName;

        let processorGeneration = model;

        let argsName = await ObtainOptionExecutor.obtainByKey(
            this.yeomanGenerator,
            GenerateArgumentsFileOptions.ARGUMENTS_NAME
        );

        if (!S(argsName).isEmpty()) {
            processorGeneration.arguments
                = new CreatedFileResult(argsName, model.options);
        }


        let abstractProcessorName = await ObtainOptionExecutor.obtainByKey(
            this.yeomanGenerator,
            GenerateAbstractProcessorFileOptions.NAME
        );

        if (!S(abstractProcessorName).isEmpty()) {
            processorGeneration.abstractProcessor
                = new CreatedFileResult(abstractProcessorName, model.options);
        }

        if (!fs.existsSync(
            this.yeomanGenerator.destinationPath(model.getSubdirectory()))) {
            model.subdirectories = [];
        }

        await this.generatorsProvider.getProcessorGenerator().execute(processorGeneration);
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
