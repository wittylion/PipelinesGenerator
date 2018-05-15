import RESOLVE_FILE_DEPENDENCY from "./ServiceIdentifiers";
import { Container } from "inversify";
import { IPipeline, PipelineExecutor } from "solid-pipelines";
import { ResolveFileDependencyPipeline } from "./ResolveFileDependencyPipeline";
import { ResolveFileDependencyExecutor } from ".";

function injectFileDependencyProvider(container: Container): void {
    container.bind<IPipeline>(RESOLVE_FILE_DEPENDENCY.PIPELINE)
        .to(ResolveFileDependencyPipeline);

    container.bind<PipelineExecutor>(RESOLVE_FILE_DEPENDENCY.EXECUTOR)
        .to(ResolveFileDependencyExecutor);
}

export { injectFileDependencyProvider }
