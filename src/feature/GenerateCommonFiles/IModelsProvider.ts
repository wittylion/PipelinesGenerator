import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";

export interface IModelsProvider {
    getArgumentsModel(): GenerateFileModel;
    getAbstractProcessorModel(): GenerateFileModel;
    getProcessorModel(): GenerateFileModel;
    getPipelineModel(): GenerateFileModel;
    getExecutorModel(): GenerateFileModel;
    getMessagesContainerModel(): GenerateFileModel;
}