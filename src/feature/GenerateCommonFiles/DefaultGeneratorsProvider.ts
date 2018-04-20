import { IGeneratorsProvider } from "./abstractions/IGeneratorsProvider";
import { GenerateArgumentsFileExecutor } from "../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from ".";
import { GeneratePipelineFileExecutor } from "../GeneratePipelineFile";

export class DefaultGeneratorsProvider implements IGeneratorsProvider {
    getPipelineGenerator(): GeneratePipelineFileExecutor {
        return GeneratePipelineFileExecutor.Instance;
    }
    public static Instance = new DefaultGeneratorsProvider();

    getArgumentsGenerator(): GenerateArgumentsFileExecutor {
        return GenerateArgumentsFileExecutor.Instance;
    }
    getAbstractProcessorGenerator(): GenerateAbstractProcessorFileExecutor {
        return GenerateAbstractProcessorFileExecutor.Instance;
    }
    getProcessorGenerator(): GenerateProcessorFileExecutor {
        return GenerateProcessorFileExecutor.Instance;
    }
    getExecutorGenerator(): GenerateExecutorFileExecutor {
        return GenerateExecutorFileExecutor.Instance;
    }
    getCommonFilesGenerator(): GenerateCommonPipelineFilesExecutor {
        return GenerateCommonPipelineFilesExecutor.Instance;
    }
}