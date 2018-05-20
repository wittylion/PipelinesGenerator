import { Container } from "inversify";
import { IProcessor } from "solid-pipelines";
import { AddExportDeclaration } from "./processors";
import GENERATE_EXECUTOR_FILE from "../../../feature/GenerateExecutorFile/ServiceIdentifiers";

function injectTypescriptExecutorGenerator(container: Container) {
    container.bind<IProcessor>(GENERATE_EXECUTOR_FILE.PROCESSOR)
        .to(AddExportDeclaration);
}

export {
    injectTypescriptExecutorGenerator
}
