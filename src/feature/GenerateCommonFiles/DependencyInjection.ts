import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { Container } from "inversify";
import GENERATE_COMMON_FILES from "./ServiceIdentifiers";
import { GenerateCommonPipelineFilesExecutor } from ".";
import { TryToGetPipelineName } from "./processors";
import { GenerateCommonPipelineFilesPipeline } from "./GenerateCommonPipelineFilesPipeline";

function injectCommonFilesGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_COMMON_FILES.PIPELINE)
        .to(GenerateCommonPipelineFilesPipeline);

    container.bind<PipelineExecutor>(GENERATE_COMMON_FILES.EXECUTOR)
        .to(GenerateCommonPipelineFilesExecutor);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(TryToGetPipelineName);
}

export { injectCommonFilesGenerator }
