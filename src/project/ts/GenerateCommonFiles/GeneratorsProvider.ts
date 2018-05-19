import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";
import { GenerateFileFromTemplateExecutor } from "../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateExecutor";

import { injectable, inject } from "inversify";
import "reflect-metadata"
import GENERATE_COMMON_FILES from "../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { GenerateCommonPipelineFilesExecutor } from "../../../feature/GenerateCommonFiles";

@injectable()
export class GeneratorsProvider extends DefaultGeneratorsProvider {

    getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor {
        return Defaults.FileFromTemplateGenerator;
    }

    getExecutorGenerator() {
        return Defaults.ExecutorGenerator;
    }

    getProcessorGenerator() {
        return Defaults.ProcessorGenerator;
    }

    getArgumentsGenerator() {
        return Defaults.ArgumentsGenerator;
    }

    getAbstractProcessorGenerator() {
        return Defaults.AbstractProcessorGenerator;
    }
}