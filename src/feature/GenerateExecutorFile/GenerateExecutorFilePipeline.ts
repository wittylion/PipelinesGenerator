import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import GENERATE_EXECUTOR_FILE from "./ServiceIdentifiers";
import "reflect-metadata";
import { injectable, multiInject } from 'inversify';

@injectable()
export class GenerateExecutorFilePipeline implements IPipeline {

    /**
     *
     */
    constructor(

        @multiInject(GENERATE_EXECUTOR_FILE.PROCESSOR)
        public processors: IProcessor[]

    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureModel.Instance,
            ...this.processors
        ];
    }
}