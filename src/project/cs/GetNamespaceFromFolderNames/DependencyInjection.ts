import { Container } from "inversify";
import GET_NAMESPACE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { GetNamespaceFromFolderNamesPipeline } from "./GetNamespaceFromFolderNamesPipeline";
import { GetNamespaceFromFolderNamesExecutor } from ".";
import { TryFindProjectFile } from "./processors";

function injectNamespaceProvider(container: Container): void {
    container.bind<IPipeline>(GET_NAMESPACE.PIPELINE)
        .to(GetNamespaceFromFolderNamesPipeline);

    container.bind<PipelineExecutor>(GET_NAMESPACE.EXECUTOR)
        .to(GetNamespaceFromFolderNamesExecutor);

        container.bind<IProcessor>(GET_NAMESPACE.PROCESSOR)
            .to(TryFindProjectFile);
}

export { injectNamespaceProvider }
