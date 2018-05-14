import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { GenerateProcessorFileOptions } from "../../GenerateProcessorFile/GenerateProcessorFileOptions";
import { ObtainOptionExecutor } from "../../ObtainOption";
import S from "string";
import Generator = require("yeoman-generator");
import { inject, injectable } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class TryToGuessProcessorName extends GenerateProcessorFromScratchProcessor {

    constructor(

        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

    ) {
        super();
    }

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        const optionName = GenerateProcessorFileOptions.PROCESSOR_NAME;

        let optionResult
            = await ObtainOptionExecutor.obtainByKey(this.yeomanGenerator, optionName);

        if (!S(optionResult).isEmpty()) {
            args.guesses.push(optionResult);
        }
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
