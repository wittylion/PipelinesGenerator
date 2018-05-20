import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateProcessorModel } from './models/GenerateProcessorModel';
import { inject, injectable, multiInject } from "inversify";
import "reflect-metadata";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";

@injectable()
export class GenerateProcessorFilePipeline implements IPipeline {

    constructor(
        @multiInject(GENERATE_PROCESSOR_FILE.PROCESSOR)
        private processors: IProcessor[]
    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.GetProcessorsBeforeFileGeneration(),
            ...this.GenerateProcessor()

        ];
    }

    GetProcessorsBeforeFileGeneration(): IProcessor[] {
        return [
            Processors.TrySetClassNameToFileNameIfMissing.Instance,
            Processors.TrySetFileNameToClassNameIfMissing.Instance,
            Processors.CheckClassName.Instance,
            Processors.CheckFileName.Instance,
            Processors.CheckArguments.Instance,
            Processors.CheckAbstractProcessor.Instance,
        ];
    }

    GenerateProcessor(): IProcessor[] {
        return this.processors;
    }
}