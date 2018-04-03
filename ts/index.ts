import Generator = require("yeoman-generator");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { ModelsProvider } from "../src/project/ts/GenerateCommonFiles/ModelsProvider";
import { Defaults } from "../src/project/ts/Defaults";

class PipelinesGenerator extends Generator {
    initializing() {
        Defaults.initializeModels();
    }

    prompting() {
    }

    configuring() {

    }

    async default() {
        await this._createPipelineInfrastructure();
    }

    async _createPipelineInfrastructure() {
        let generateCommonFilesArguments = new GenerateCommonPipelineFilesArguments();
        generateCommonFilesArguments.yeomanGenerator = this;
        generateCommonFilesArguments.extension = Defaults.extension;
        generateCommonFilesArguments.modelsProvider = new ModelsProvider();

        await GenerateCommonPipelineFilesExecutor.Instance.execute(generateCommonFilesArguments);
    }

    end() {
    }
}

export = PipelinesGenerator
