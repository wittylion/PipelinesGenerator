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

@injectable()
export class GeneratorsProvider extends DefaultGeneratorsProvider {

    processorGenerator: GenerateProcessorFileExecutor;
    fileFromTemplateGenerator: GenerateFileFromTemplateExecutor;

    constructor(

        @inject(GENERATE_CSHARP_FILE.PIPELINE)
        generateFile: IPipeline,

    ) {
        super();
        this.fileFromTemplateGenerator = new GenerateFileFromTemplateExecutor(generateFile);
        this.processorGenerator = new GenerateProcessorFileExecutor(
            new GenerateProcessorFilePipeline(
                (model) => this.fileFromTemplateGenerator.execute(
                    new GenerateFileFromTemplateArguments(model)
                )
            )
        );
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