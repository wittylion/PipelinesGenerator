import { Container } from "inversify";
import { injectProgramFlow } from "../ProgramFlow/DependencyInjection";
import { injectProgramFlowQuestion } from "../ChooseProgramFlow/DependencyInjection";
import { injectSolidPipelines } from "../../foundation/PipelinesExtensions/DependencyInjection";
import { injectProcessorFromScratchGeneration } from "../GenerateProcessorFromScratch/DependencyInjection";
import { injectFileDependencyProvider } from "../../foundation/ResolveFileDependency/DependencyInjection";
import { injectFileFinder } from "../../foundation/FindFile/DependencyInjection";
import { injectYeomanDependencies } from "../../foundation/YeomanPipeline/DependencyInjection";
import { injectCommonFilesGenerator } from "../GenerateCommonFiles/DependencyInjection";

function injectCommon(container: Container) {
    injectSolidPipelines(container);
    injectProgramFlow(container);
    injectProgramFlowQuestion(container);
    injectProcessorFromScratchGeneration(container);
    injectFileDependencyProvider(container);
    injectFileFinder(container);
    injectYeomanDependencies(container);
    injectCommonFilesGenerator(container);
}

export { injectCommon }
