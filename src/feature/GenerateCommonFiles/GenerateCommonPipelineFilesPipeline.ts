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
            Processors.ValidatePipelineName.Instance,
            Processors.EnsureCommonSubfolders.Instance,
            ...this.GenerateArguments(),
            ...this.GenerateAbstractProcessor(),
            ...this.GenerateProcessors(),
            ...this.GeneratePipeline(),
            ...this.GenerateExecutor(),
            Processors.GenerateMessages.Instance,
            ...this.GetExtraGeneratorProcessors()
        ];
    }

    GenerateArguments(): IProcessor[] {
        return [
            Processors.GenerateArguments.Instance
        ];
    }

    GenerateAbstractProcessor(): IProcessor[] {
        return [
            Processors.GenerateAbstractProcessor.Instance
        ];
    }

    GenerateProcessors(): IProcessor[] {
        return [
            Processors.GenerateProcessors.Instance
        ];
    }

    GeneratePipeline(): IProcessor[] {
        return [
            Processors.GeneratePipeline.Instance
        ];
    }

    GenerateExecutor(): IProcessor[] {
        return [
            Processors.GenerateExecutor.Instance
        ];
    }

    GetExtraGeneratorProcessors(): IProcessor[] {
        return [];
    }
}