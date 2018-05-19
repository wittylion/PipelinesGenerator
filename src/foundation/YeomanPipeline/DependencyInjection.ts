import { Container } from "inversify";
import FILES_GENERATION from "../TypeDefinitions/ServiceIdentifiers";
import { YeomanDestinationEnsurer } from "./YeomanDestinationEnsurer";
import { DestinationEnsurer } from "../TypeDefinitions/DestinationEnsurer";
import { YeomanTemplateEnsurer } from "./YeomanTemplateEnsurer";

function injectYeomanDependencies(container: Container) {
    container.bind<DestinationEnsurer>(FILES_GENERATION.DESTINATION_ENSURER)
        .to(YeomanDestinationEnsurer);

    container.bind<DestinationEnsurer>(FILES_GENERATION.DESTINATION_ENSURER)
        .to(YeomanTemplateEnsurer);
}

export { injectYeomanDependencies }
