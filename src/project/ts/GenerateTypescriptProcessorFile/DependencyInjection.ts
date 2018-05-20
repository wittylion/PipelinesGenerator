import { Container } from "inversify";
import { IPipeline, IProcessor } from "solid-pipelines";
import GENERATE_PROCESSOR_FILE from "../../../feature/GenerateProcessorFile/ServiceIdentifiers";
import { GenerateTypescriptProcessorFilePipeline } from "./GenerateTypescriptProcessorFilePipeline";
import { UpdateExportsFile } from "./processors";

function injectTypescriptProcessorGenerator(container: Container) {
    container.rebind<IPipeline>(GENERATE_PROCESSOR_FILE.PIPELINE)
        .to(GenerateTypescriptProcessorFilePipeline);

    container.bind<IProcessor>(GENERATE_PROCESSOR_FILE.PROCESSOR)
        .to(UpdateExportsFile);
}

export {
    injectTypescriptProcessorGenerator
}
