import FIND_FILE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import { Container } from "inversify";
import { FindFilePipeline } from "./FindFilePipeline";
import { FindFileExecutor } from ".";
import { CollectAllPossibleDirectories } from "./processors";

function injectFileFinder(container: Container): void {
    container.bind<IPipeline>(FIND_FILE.PIPELINE)
        .to(FindFilePipeline);

    container.bind<PipelineExecutor>(FIND_FILE.EXECUTOR)
        .to(FindFileExecutor);

    container.bind<IProcessor>(FIND_FILE.PROCESSOR)
        .to(CollectAllPossibleDirectories);
}

export { injectFileFinder }
