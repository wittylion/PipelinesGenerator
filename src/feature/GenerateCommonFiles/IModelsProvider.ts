import { GenerateFileModel } from "./GenerateFileModel";

export interface IModelsProvider {
    getArgumentsModel(): GenerateFileModel;
    getAbstractProcessorModel(): GenerateFileModel;
    getProcessorModel(): GenerateFileModel;
    getPipelineModel(): GenerateFileModel;
    getExecutorModel(): GenerateFileModel;
    getProcessorsExportsModel(): GenerateFileModel;
    getMainExportsModel(): GenerateFileModel;
}