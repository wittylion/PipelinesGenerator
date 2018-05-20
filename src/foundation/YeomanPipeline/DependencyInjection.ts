import { Container } from "inversify";
import FILES_GENERATION from "../TypeDefinitions/ServiceIdentifiers";
import { YeomanDestinationEnsurer } from "./YeomanDestinationEnsurer";
import { DestinationEnsurer } from "../TypeDefinitions/DestinationEnsurer";
import { YeomanTemplateEnsurer } from "./YeomanTemplateEnsurer";
import { YeomanFileGenerator } from "./YeomanFileGenerator";
import { FileFromTemplateGenerator } from "../TypeDefinitions/FileGenerator";
import { FileExistanceChecker } from "../TypeDefinitions/CheckFileExistance";
import { YeomanExistanceChecker } from "./YeomanExistanceChecker";
import { FileSystemExistanceChecker } from "./FileSystemExistanceChecker";

function injectYeomanDependencies(container: Container) {
    container.bind<DestinationEnsurer>(FILES_GENERATION.DESTINATION_ENSURER)
        .to(YeomanDestinationEnsurer);

    container.bind<DestinationEnsurer>(FILES_GENERATION.TEMPLATE_ENSURER)
        .to(YeomanTemplateEnsurer);

    container.bind<FileFromTemplateGenerator>(FILES_GENERATION.FILE_GENERATOR)
        .to(YeomanFileGenerator);

    container.bind<FileExistanceChecker>(FILES_GENERATION.EXISTANCE_CHECKER)
        .to(FileSystemExistanceChecker);
}

export { injectYeomanDependencies }
