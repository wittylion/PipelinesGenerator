import { Container } from "inversify";
import GET_NAMESPACE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import GENERATE_CSHARP_FILE from "./ServiceIdentifiers";
import { GenerateCSharpFileFromTemplatePipeline } from "./GenerateCSharpFileFromTemplatePipeline";
import { AddNameSpaceToOptions, AddLibraryNameToOptions } from "./processors";

function injectCSharpFileGenerator(container: Container): void {
    container.bind<IPipeline>(GENERATE_CSHARP_FILE.PIPELINE)
        .to(GenerateCSharpFileFromTemplatePipeline);

    container.bind<IProcessor>(GENERATE_CSHARP_FILE.PROCESSOR)
        .to(AddNameSpaceToOptions);

    container.bind<IProcessor>(GENERATE_CSHARP_FILE.PROCESSOR)
        .to(AddLibraryNameToOptions);
}

export { injectCSharpFileGenerator }
