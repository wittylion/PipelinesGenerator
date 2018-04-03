import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import { GenerateFileModel } from "../../../feature/GenerateCommonFiles/GenerateFileModel";
import { Defaults } from "../Defaults";
import _ from "lodash";

export class ModelsProvider implements IModelsProvider {
    getProcessorsExportsModel(): GenerateFileModel {
        throw new Error("Method not implemented.");
    }
    getMainExportsModel(): GenerateFileModel {
        throw new Error("Method not implemented.");
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