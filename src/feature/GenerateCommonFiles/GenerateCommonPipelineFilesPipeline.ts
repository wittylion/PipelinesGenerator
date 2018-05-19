import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable, multiInject } from 'inversify';
import GENERATE_COMMON_FILES from './ServiceIdentifiers';

@injectable()
export class GenerateCommonPipelineFilesPipeline implements IPipeline {

    constructor(

        @multiInject(GENERATE_COMMON_FILES.PROCESSOR)
        public processors: IProcessor[]

    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.processors,
            ...this.GetExtraGeneratorProcessors()
        ];
    }

    GetExtraGeneratorProcessors(): IProcessor[] {
        return [];
    }
}