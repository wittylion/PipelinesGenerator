import { Container } from "inversify";
import GET_NAMESPACE from "./ServiceIdentifiers";
import { IPipeline, PipelineExecutor, IProcessor } from "solid-pipelines";
import GENERATE_CSHARP_FILE from "./ServiceIdentifiers";
import { GenerateCSharpFileFromTemplatePipeline } from "./GenerateCSharpFileFromTemplatePipeline";
import { AddNameSpaceToOptions, AddLibraryNameToOptions } from "./processors";
import GENERATE_FILE_FROM_TEMPLATE from "../../../feature/GenerateFileFromTemplate/ServiceIdentifiers";

function injectCSharpFileGenerator(container: Container): void {
    container.rebind<IPipeline>(GENERATE_FILE_FROM_TEMPLATE.PIPELINE)
        .to(GenerateCSharpFileFromTemplatePipeline);

    container.bind<IProcessor>(GENERATE_CSHARP_FILE.PROCESSOR)
        .to(AddNameSpaceToOptions);

    container.bind<IProcessor>(GENERATE_CSHARP_FILE.PROCESSOR)
        .to(AddLibraryNameToOptions);
}

export { injectCSharpFileGenerator }
