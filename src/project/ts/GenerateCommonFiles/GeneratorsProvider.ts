import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";
import { GenerateFileFromTemplateExecutor } from "../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateExecutor";

import { injectable, inject } from "inversify";
import "reflect-metadata"
import GENERATE_COMMON_FILES from "../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import { GenerateCommonPipelineFilesExecutor } from "../../../feature/GenerateCommonFiles";
import GENERATE_PROCESSOR_FILE from "../../../feature/GenerateProcessorFile/ServiceIdentifiers";
import { GenerateProcessorFileExecutor } from "../../../feature/GenerateProcessorFile";

@injectable()
export class GeneratorsProvider extends DefaultGeneratorsProvider {

    getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor {
        return Defaults.FileFromTemplateGenerator;
    }

    getAbstractProcessorGenerator() {
        return Defaults.AbstractProcessorGenerator;
    }
}