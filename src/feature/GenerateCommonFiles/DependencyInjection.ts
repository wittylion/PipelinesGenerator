import GENERATE_PROCESSOR_FROM_SCRATCH from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { Container } from "inversify";
import GENERATE_COMMON_FILES from "./ServiceIdentifiers";
import { GenerateCommonPipelineFilesExecutor } from ".";
import { TryToGetPipelineName, TryToGetProcessors, AskForSubfolderCreation, EnsureCommonSubfolders, GenerateArguments, GenerateAbstractProcessor, GenerateProcessors, GeneratePipeline, GenerateExecutor, GenerateMessages } from "./processors";
import { GenerateCommonPipelineFilesPipeline } from "./GenerateCommonPipelineFilesPipeline";

function injectCommonFilesGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_COMMON_FILES.PIPELINE)
        .to(GenerateCommonPipelineFilesPipeline);

    container.bind<PipelineExecutor>(GENERATE_COMMON_FILES.EXECUTOR)
        .to(GenerateCommonPipelineFilesExecutor);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(TryToGetPipelineName);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(TryToGetProcessors);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(AskForSubfolderCreation);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(EnsureCommonSubfolders);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GenerateArguments);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GenerateAbstractProcessor);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GenerateProcessors);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GeneratePipeline);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GenerateExecutor);

    container.bind<IProcessor>(GENERATE_COMMON_FILES.PROCESSOR)
        .to(GenerateMessages);
}

export { injectCommonFilesGenerator }
