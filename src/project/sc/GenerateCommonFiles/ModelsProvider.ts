import { GenerateFileModel } from "../../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import { Defaults } from "../Defaults";
import _ from "lodash";
import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";

export class ModelsProvider implements IModelsProvider {
    public static readonly Instance: ModelsProvider = new ModelsProvider();

    getMessagesContainerModel(): GenerateFileModel {
        return _.clone(Defaults.messagesModel);
    }
    getArgumentsModel(): GenerateFileModel {
        return _.clone(Defaults.argumentsModel);
    }
    getAbstractProcessorModel(): GenerateFileModel {
        return _.clone(Defaults.abstractProcessorModel);
    }
    getProcessorModel(): GenerateFileModel {
        return _.clone(Defaults.processorModel);
    }
    getPipelineModel(): GenerateFileModel {
        return _.clone(Defaults.pipelineModel);
    }
    getExecutorModel(): GenerateFileModel {
        return _.clone(Defaults.executorModel);
    }
}