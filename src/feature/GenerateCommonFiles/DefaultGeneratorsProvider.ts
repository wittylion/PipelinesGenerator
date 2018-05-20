import { IGeneratorsProvider } from "./abstractions/IGeneratorsProvider";
import { GenerateArgumentsFileExecutor } from "../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from ".";
import { GeneratePipelineFileExecutor } from "../GeneratePipelineFile";
import { GenerateFileFromTemplateExecutor } from "../GenerateFileFromTemplate";

import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export abstract class DefaultGeneratorsProvider implements IGeneratorsProvider {

    abstract getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor;

    getPipelineGenerator(): GeneratePipelineFileExecutor {
        return GeneratePipelineFileExecutor.Instance;
    }
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor {
        return GenerateAbstractProcessorFileExecutor.Instance;
    }
}