import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import S from "string";
import { InputTypeEnum } from "../../../foundation/YeomanQuestions";
import { EnsureOptionExecutor } from "../../EnsureOption";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import Generator = require("yeoman-generator");
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";

@injectable()
export class AskForSubfolderCreation extends GenerateCommonPipelineFilesProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,
    ) {
        super();

    }

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        args.createSubfolderWithPipelineName =
            S(
                await EnsureOptionExecutor.obtainByKey(
                    this.yeomanGenerator,
                    "subfolder",
                    InputTypeEnum.Confirm,
                    false,
                    false,
                    false
                )
            ).toBoolean();
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.createSubfolderWithPipelineName === undefined;
        return safeCondition;
    }
}
