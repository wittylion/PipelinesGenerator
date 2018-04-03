import { IModelsProvider } from "../../../feature/GenerateCommonFiles/IModelsProvider";
import { GenerateFileModel } from "../../../feature/GenerateCommonFiles/GenerateFileModel";
import { Defaults } from "../Defaults";
import _ from "lodash";

export class ModelsProvider implements IModelsProvider {
    getProcessorsExportsModel(): GenerateFileModel {
        return undefined;
    }
    getMainExportsModel(): GenerateFileModel {
        return undefined;
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