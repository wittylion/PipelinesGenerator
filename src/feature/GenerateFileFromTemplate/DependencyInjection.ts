import { Container } from "inversify";
import GENERATE_PROCESSOR_FILE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor } from "solid-pipelines";
import { GenerateFileFromTemplatePipeline } from "./GenerateFileFromTemplatePipeline";
import { GenerateFileFromTemplateExecutor } from ".";

function injectFileFromTemplateGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_PROCESSOR_FILE.PIPELINE)
        .to(GenerateFileFromTemplatePipeline);

    container.bind<PipelineExecutor>(GENERATE_PROCESSOR_FILE.EXECUTOR)
        .to(GenerateFileFromTemplateExecutor);
}

export { injectFileFromTemplateGenerator }
