import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
export class GenerateCommonPipelineFilesPipeline implements IPipeline {

    GetProcessors(): IProcessor[] {
        return [
            Processors.ValidateYeomanGenerator.Instance,
            Processors.TryToGetPipelineName.Instance,
            Processors.TryToGetProcessors.Instance,
            Processors.AskForSubfolderCreation.Instance,
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