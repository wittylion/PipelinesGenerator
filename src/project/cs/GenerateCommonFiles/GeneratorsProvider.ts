import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";

import { injectable, inject } from "inversify";
import "reflect-metadata"
import GENERATE_CSHARP_FILE from "../GenerateCSharpFileFromTemplate/ServiceIdentifiers";
import { IPipeline } from "solid-pipelines";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from "../../../feature/GenerateFileFromTemplate";
import { GenerateProcessorFileExecutor } from "../../../feature/GenerateProcessorFile";
import { GeneratePipelineFileExecutor } from "../../../feature/GeneratePipelineFile";
import { GenerateProcessorFilePipeline } from "../../../feature/GenerateProcessorFile/GenerateProcessorFilePipeline";
import { GenerateCommonPipelineFilesExecutor } from "../../../feature/GenerateCommonFiles";
import GENERATE_COMMON_FILES from "../../../feature/GenerateCommonFiles/ServiceIdentifiers";
import GENERATE_PROCESSOR_FILE from "../../../feature/GenerateProcessorFile/ServiceIdentifiers";
import GENERATE_FILE_FROM_TEMPLATE from "../../../feature/GenerateFileFromTemplate/ServiceIdentifiers";

@injectable()
export class GeneratorsProvider extends DefaultGeneratorsProvider {

    fileFromTemplateGenerator: GenerateFileFromTemplateExecutor;

    constructor(

        @inject(GENERATE_FILE_FROM_TEMPLATE.PIPELINE)
        generateFile: IPipeline,

        @inject(GENERATE_PROCESSOR_FILE.EXECUTOR)
        public processorGenerator: GenerateProcessorFileExecutor
    ) {
        super();
        this.fileFromTemplateGenerator = new GenerateFileFromTemplateExecutor(generateFile);

    }

    getFileFromTemplateGenerator(){
        return this.fileFromTemplateGenerator;
    }

    getPipelineGenerator() {
        return GeneratePipelineFileExecutor.Instance;
    }

    getProcessorGenerator() {
        return this.processorGenerator;
    }
}