import { Container } from "inversify";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";
import { PipelineExecutor, IPipeline, IProcessor } from "solid-pipelines";
import { GenerateProcessorFilePipeline } from "./GenerateProcessorFilePipeline";
import { GenerateProcessorFileExecutor } from ".";
import { GenerateProcessorFile } from "./processors";

function injectProcessorGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FILE.PIPELINE)
        .to(GenerateProcessorFilePipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FILE.EXECUTOR)
        .to(GenerateProcessorFileExecutor);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FILE.PROCESSOR)
        .to(GenerateProcessorFile);
}

export { injectProcessorGenerator }
