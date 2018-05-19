import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { Container } from "inversify";
import GENERATE_COMMON_FILES from "./ServiceIdentifiers";
import { GenerateCommonFilesPipeline } from "../../project/ts/GenerateCommonFiles";
import { GenerateCommonPipelineFilesExecutor } from ".";

function injectCommonFilesGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_COMMON_FILES.PIPELINE)
        .to(GenerateCommonFilesPipeline);

    container.bind<PipelineExecutor>(GENERATE_COMMON_FILES.EXECUTOR)
        .to(GenerateCommonPipelineFilesExecutor);
}

export { injectCommonFilesGenerator }
