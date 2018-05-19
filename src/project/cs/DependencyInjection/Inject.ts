import { Container } from "inversify";
import { injectCommon } from "../../../feature/DependencyInjection/Common";
import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import GENERATE_COMMON_FILES from "../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { IGeneratorsProvider } from "../../../feature/GenerateCommonFiles/abstractions/IGeneratorsProvider";
import { ModelsProvider } from "../GenerateCommonFiles/ModelsProvider";
import { GeneratorsProvider } from "../GenerateCommonFiles/GeneratorsProvider";
import { injectNamespaceProvider } from "../GetNamespaceFromFolderNames/DependencyInjection";
import { injectCSharpFileGenerator } from "../GenerateCSharpFileFromTemplate/DependencyInjection";

function injectCSharpDependencies(container: Container) {

    container.bind<IModelsProvider>(GENERATE_COMMON_FILES.MODELS_PROVIDER)
        .to(ModelsProvider);

    container.bind<IGeneratorsProvider>(GENERATE_COMMON_FILES.GENERATORS_PROVIDER)
        .to(GeneratorsProvider);

    injectCommon(container);
    injectNamespaceProvider(container);
    injectCSharpFileGenerator(container);
}

export { injectCSharpDependencies }
