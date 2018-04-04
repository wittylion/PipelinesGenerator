import { GenerateFileModel } from "../GenerateFileFromTemplate/GenerateFileModel";

export interface IModelsProvider {
    getArgumentsModel(): GenerateFileModel;
    getAbstractProcessorModel(): GenerateFileModel;
    getProcessorModel(): GenerateFileModel;
    getPipelineModel(): GenerateFileModel;
    getExecutorModel(): GenerateFileModel;
    getMessagesContainerModel(): GenerateFileModel;
}