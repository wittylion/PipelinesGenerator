import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../EnsureOption";
import path = require("path");
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");

@injectable()
export class TryToGetProcessors extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer

    ) {
        super();

    }

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let defaultProcessorName = path.basename(await this.destination.ensure());

        let defaultValue =
            S(args.pipelineNameSpecifiedByUser).isEmpty()
                ? defaultProcessorName
                : S(args.pipelineNameSpecifiedByUser).chompRight("Pipeline").s;

        let processorNames =
            await EnsureOptionExecutor.obtainByKey(
                this.yeomanGenerator,
                "processorNames",
                InputTypeEnum.Input,
                false,
                false,
                defaultValue
            );

        args.processorNamesSpecifiedByUser = S(processorNames).isEmpty() ? [] : processorNames.split(' ');
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.generatedProcessors.length < 1;
        return safeCondition;
    }
}
