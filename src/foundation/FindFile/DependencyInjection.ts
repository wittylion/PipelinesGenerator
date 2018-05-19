import FIND_FILE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor } from "solid-pipelines";
import { Container } from "inversify";
import { FindFilePipeline } from "./FindFilePipeline";
import { FindFileExecutor } from ".";

function injectFileFinder(container: Container): void {
    container.bind<IPipeline>(FIND_FILE.PIPELINE)
        .to(FindFilePipeline);

    container.bind<PipelineExecutor>(FIND_FILE.EXECUTOR)
        .to(FindFileExecutor);
}

export { injectFileFinder }
