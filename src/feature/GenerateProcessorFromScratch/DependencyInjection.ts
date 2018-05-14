import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { GenerateProcessorFromScratchPipeline } from "./GenerateProcessorFromScratchPipeline";
import { IPipeline, PipelineExecutor } from "solid-pipelines";
import { Container } from "inversify";
import { GenerateProcessorFromScratchExecutor } from "./GenerateProcessorFromScratchExecutor";

function injectProcessorFromScratchGeneration(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FROM_SCRATCH.PIPELINE)
        .to(GenerateProcessorFromScratchPipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FROM_SCRATCH.EXECUTOR)
        .to(GenerateProcessorFromScratchExecutor);
}

export { injectProcessorFromScratchGeneration }
