import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { GenerateProcessorFromScratchPipeline } from "./GenerateProcessorFromScratchPipeline";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { Container } from "inversify";
import { GenerateProcessorFromScratchExecutor } from "./GenerateProcessorFromScratchExecutor";
import { AskForProcessorName, EnsureArgumentsData, EnsureAbstractProcessorData, EnsureDefaultModelIsSet, TryToGuessProcessorName, GenerateProcessor } from "./processors";

function injectProcessorFromScratchGeneration(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FROM_SCRATCH.PIPELINE)
        .to(GenerateProcessorFromScratchPipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FROM_SCRATCH.EXECUTOR)
        .to(GenerateProcessorFromScratchExecutor);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(EnsureDefaultModelIsSet);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(TryToGuessProcessorName);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(AskForProcessorName);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(EnsureArgumentsData);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(EnsureAbstractProcessorData);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FROM_SCRATCH.PROCESSOR)
        .to(GenerateProcessor);
}

export { injectProcessorFromScratchGeneration }
