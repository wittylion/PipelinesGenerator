import { Container, decorate, injectable } from "inversify";
import { PipelineRunner } from "solid-pipelines";
import SOLID_PIPELINES from "./ServiceIdentifiers";

decorate(injectable(), PipelineRunner);

function injectSolidPipelines(container: Container): void {
    container.bind(PipelineRunner)
        .toSelf()
        .inSingletonScope();
}

export { injectSolidPipelines }
