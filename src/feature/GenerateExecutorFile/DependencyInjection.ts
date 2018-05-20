import { Container } from "inversify";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";
import { PipelineExecutor, IPipeline, IProcessor } from "solid-pipelines";
import { GenerateExecutorFilePipeline } from "./GenerateExecutorFilePipeline";
import { GenerateExecutorFileExecutor } from ".";
import { GenerateFile } from "./processors";

function injectExecutorGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FILE.PIPELINE)
        .to(GenerateExecutorFilePipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FILE.EXECUTOR)
        .to(GenerateExecutorFileExecutor);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FILE.PROCESSOR)
        .to(GenerateFile);
}

export { injectExecutorGenerator }
