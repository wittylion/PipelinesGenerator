import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import { GenerateFileModel } from "../../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import { Defaults } from "../Defaults";
import _ from "lodash";

export class ModelsProvider implements IModelsProvider {
    public static Instance = new ModelsProvider();

    getMessagesContainerModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.messagesModel);
    }
    getArgumentsModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.argumentsModel);
    }
    getAbstractProcessorModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.abstractProcessorModel);
    }
    getProcessorModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.processorModel);
    }
    getPipelineModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.pipelineModel);
    }
    getExecutorModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.executorModel);
    }
}