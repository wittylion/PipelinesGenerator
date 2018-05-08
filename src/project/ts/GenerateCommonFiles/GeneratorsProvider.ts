import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";
import { GenerateFileFromTemplateExecutor } from "../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplateExecutor";

import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class GeneratorsProvider extends DefaultGeneratorsProvider {

    getFileFromTemplateGenerator(): GenerateFileFromTemplateExecutor {
        return Defaults.FileFromTemplateGenerator;
    }

    public static Instance = new GeneratorsProvider();

    getExecutorGenerator() {
        return Defaults.ExecutorGenerator;
    }

    getProcessorGenerator() {
        return Defaults.ProcessorGenerator;
    }

    getArgumentsGenerator() {
        return Defaults.ArgumentsGenerator;
    }

    getCommonFilesGenerator() {
        return Defaults.CommonFilesGenerator;
    }

    getAbstractProcessorGenerator() {
        return Defaults.AbstractProcessorGenerator;
    }
}