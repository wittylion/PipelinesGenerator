import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { EnsureOptionExecutor } from "../../EnsureOption";
import path = require("path");
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import Generator = require("yeoman-generator");
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";

@injectable()
export class TryToGetPipelineName extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destinationEnsurer: DestinationEnsurer

    ) {
        super();

    }

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let destination = await this.destinationEnsurer.ensure();

        args.pipelineNameSpecifiedByUser =
            await EnsureOptionExecutor.obtainByKey(
                this.yeomanGenerator,
                "pipelineName",
                InputTypeEnum.Input,
                false,
                false,
                path.basename(destination)
            );
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = S(args.pipelineNameSpecifiedByUser).isEmpty();
        return safeCondition;
    }
}
