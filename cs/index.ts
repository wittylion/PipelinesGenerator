import { Defaults } from "../src/project/cs/Defaults";
import { ModelsProvider } from "../src/project/cs/GenerateCommonFiles/ModelsProvider";
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import Generator = require("yeoman-generator");
import _ = require("lodash");

class PipelinesGenerator extends Generator {
    initializing() {
        Defaults.initializeModels();
    }

    configuring() {

    }

    async default() {
        await this._createPipelineInfrastructure();
    }

    async _createPipelineInfrastructure() {
        let generateCommonFilesArguments = new GenerateCommonPipelineFilesArguments();
        generateCommonFilesArguments.extension = Defaults.extension;
        generateCommonFilesArguments.yeomanGenerator = this;
        generateCommonFilesArguments.commonSubdirectoryCaseTuner = x => _.upperFirst(_.camelCase(x))
        generateCommonFilesArguments.modelsProvider = new ModelsProvider();
        
        await GenerateCommonPipelineFilesExecutor.Instance.execute(generateCommonFilesArguments);
    }
}

export = PipelinesGenerator
