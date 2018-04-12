import { IGeneratorsProvider } from "./abstractions/IGeneratorsProvider";
import { GenerateArgumentsFileExecutor } from "../GenerateArgumentsFile";
import { GenerateAbstractProcessorFileExecutor } from "../GenerateAbstractProcessorFile";
import { GenerateProcessorFileExecutor } from "../GenerateProcessorFile";
import { GenerateExecutorFileExecutor } from "../GenerateExecutorFile";
import { GenerateCommonPipelineFilesExecutor } from ".";

export class DefaultGeneratorsProvider implements IGeneratorsProvider {
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