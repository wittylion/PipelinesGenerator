import { Container } from "inversify";
import { injectProgramFlow } from "../ProgramFlow/DependencyInjection";
import { injectProgramFlowQuestion } from "../ChooseProgramFlow/DependencyInjection";
import { injectSolidPipelines } from "../../foundation/PipelinesExtensions/DependencyInjection";
import { injectProcessorFromScratchGeneration } from "../GenerateProcessorFromScratch/DependencyInjection";
import { injectFileDependencyProvider } from "../../foundation/ResolveFileDependency/DependencyInjection";
import { injectFileFinder } from "../../foundation/FindFile/DependencyInjection";
import { injectYeomanDependencies } from "../../foundation/YeomanPipeline/DependencyInjection";
import { injectCommonFilesGenerator } from "../GenerateCommonFiles/DependencyInjection";
import { injectProcessorGenerator } from "../GenerateProcessorFile/DependencyInjection";
import { injectFileFromTemplateGenerator } from "../GenerateFileFromTemplate/DependencyInjection";
import { injectExecutorGenerator } from "../GenerateExecutorFile/DependencyInjection";
import { injectArgumentsGenerator } from "../GenerateArgumentsFile/DependencyInjection";

function injectCommon(container: Container) {
    injectSolidPipelines(container);
    injectProgramFlow(container);
    injectProgramFlowQuestion(container);
    injectProcessorFromScratchGeneration(container);
    injectFileDependencyProvider(container);
    injectFileFinder(container);
    injectProcessorGenerator(container);
    injectExecutorGenerator(container);
    injectArgumentsGenerator(container);
    injectYeomanDependencies(container);
    injectCommonFilesGenerator(container);
    injectFileFromTemplateGenerator(container);
}

export { injectCommon }
