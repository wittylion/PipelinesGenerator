import { Container } from "inversify";
import GENERATE_EXPORTS from "./ServiceIdentifiers";
import { GenerateExportsExecutor } from ".";
import { IPipeline, PipelineExecutor } from "solid-pipelines";
import { GenerateExportsPipeline } from "./GenerateExportsPipeline";

function injectExportsGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_EXPORTS.PIPELINE)
        .to(GenerateExportsPipeline);

    container.bind<PipelineExecutor>(GENERATE_EXPORTS.EXECUTOR)
        .to(GenerateExportsExecutor);

}

export { injectExportsGenerator }
