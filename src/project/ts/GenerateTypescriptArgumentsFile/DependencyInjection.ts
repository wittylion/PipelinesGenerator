import { Container } from "inversify";
import { IProcessor } from "solid-pipelines";
import GENERATE_ARGUMENTS_FILE from "../../../feature/GenerateArgumentsFile/ServiceIdentifiers";
import { UpdateExportsFile } from "./processors";

function injectTypescriptArgumentsGenerator(container: Container) {
    container.bind<IProcessor>(GENERATE_ARGUMENTS_FILE.PROCESSOR)
        .to(UpdateExportsFile);
}

export {
    injectTypescriptArgumentsGenerator
}
