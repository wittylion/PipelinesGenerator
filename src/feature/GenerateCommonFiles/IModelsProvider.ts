import { GenerateFileModel } from "../GenerateFileFromTemplate/models/GenerateFileModel";
import { GenerateProcessorModel } from "../GenerateProcessorFile/models/GenerateProcessorModel";

export interface IModelsProvider {
    getArgumentsModel(): GenerateFileModel;
    getAbstractProcessorModel(): GenerateFileModel;
    getProcessorModel(): GenerateProcessorModel;
    getPipelineModel(): GenerateFileModel;
    getExecutorModel(): GenerateFileModel;
    getMessagesContainerModel(): GenerateFileModel;
}