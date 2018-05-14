import { Container } from "inversify";
import { injectCommon } from "../../../feature/DependencyInjection/Common";
import { injectTypescriptProgramFlow } from "../TypescriptProgramFlow/DependencyInjection";
import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { ModelsProvider, GeneratorsProvider } from "../GenerateCommonFiles";
import { IGeneratorsProvider } from "../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";

function injectTypescriptDependencies(container: Container) {

    container.bind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        .to(ModelsProvider);
        
    container.bind<IGeneratorsProvider>(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        .to(GeneratorsProvider);

    injectCommon(container);
    injectTypescriptProgramFlow(container);
}

export { injectTypescriptDependencies }
