import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import { GenerateFileModel } from "../../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import { Defaults } from "../Defaults";
import _ from "lodash";
import { GenerateProcessorModel } from "../../../feature/GenerateProcessorFile/models/GenerateProcessorModel";
import { injectable } from "inversify";
import "reflect-metadata"

@injectable()
export class ModelsProvider implements IModelsProvider {
    getMessagesContainerModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.messagesModel);
    }
    getArgumentsModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.argumentsModel);
    }
    getAbstractProcessorModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.abstractProcessorModel);
    }
    getProcessorModel(): GenerateProcessorModel {
        return _.cloneDeep(Defaults.processorModel);
    }
    getPipelineModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.pipelineModel);
    }
    getExecutorModel(): GenerateFileModel {
        return _.cloneDeep(Defaults.executorModel);
    }
}