import RESOLVE_FILE_DEPENDENCY from "./ServiceIdentifiers";
import { Container } from "inversify";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { ResolveFileDependencyPipeline } from "./ResolveFileDependencyPipeline";
import { ResolveFileDependencyExecutor } from ".";
import { TryToGuessPath } from "./processors";

function injectFileDependencyProvider(container: Container): void {
    container.bind<IPipeline>(RESOLVE_FILE_DEPENDENCY.PIPELINE)
        .to(ResolveFileDependencyPipeline);

    container.bind<PipelineExecutor>(RESOLVE_FILE_DEPENDENCY.EXECUTOR)
        .to(ResolveFileDependencyExecutor);

        container.bind<IProcessor>(RESOLVE_FILE_DEPENDENCY.PROCESSOR)
            .to(TryToGuessPath);
}

export { injectFileDependencyProvider }
