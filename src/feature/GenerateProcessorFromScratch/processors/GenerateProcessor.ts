import { GenerateProcessorFromScratchProcessor } from "../GenerateProcessorFromScratchProcessor";
import { GenerateProcessorFromScratchArguments } from "../GenerateProcessorFromScratchArguments";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";
import GENERATE_PROCESSOR_FILE from "../../GenerateProcessorFile/ServiceIdentifiers";

@injectable()
export class GenerateProcessor extends GenerateProcessorFromScratchProcessor {

    constructor(

        @inject(GENERATE_PROCESSOR_FILE.EXECUTOR)
        public generateProcessor: PipelineExecutor

    ) {
        super();

    }

    public async SafeExecute(args: GenerateProcessorFromScratchArguments): Promise<void> {
        let generateProcessorArgs = args.model;

        generateProcessorArgs.arguments = args.argumentsModel;
        generateProcessorArgs.abstractProcessor = args.processorModel;

        await this.generateProcessor.Execute(generateProcessorArgs);
    }

    public SafeCondition(args: GenerateProcessorFromScratchArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateProcessorFromScratchArguments): boolean {
        let safeCondition =
            !!args.processorGenerator
            && !!args.model;
        return safeCondition;
    }
}
