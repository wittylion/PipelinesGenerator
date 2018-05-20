import { Container } from "inversify";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";
import { PipelineExecutor, IPipeline, IProcessor } from "solid-pipelines";
import { GenerateArgumentsFilePipeline } from "./GenerateArgumentsFilePipeline";
import { GenerateArgumentsFileExecutor } from ".";
import { GenerateArgumentsFile } from "./processors";

function injectArgumentsGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FILE.PIPELINE)
        .to(GenerateArgumentsFilePipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FILE.EXECUTOR)
        .to(GenerateArgumentsFileExecutor);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FILE.PROCESSOR)
        .to(GenerateArgumentsFile);
}

export { injectArgumentsGenerator }
