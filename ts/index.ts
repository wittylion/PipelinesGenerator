import Generator = require("yeoman-generator");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { ModelsProvider, GenerateCommonFilesPipeline } from "../src/project/ts/GenerateCommonFiles";
import { Defaults } from "../src/project/ts/Defaults";
import { GenerateCommonFilesArguments } from "../src/project/ts/GenerateCommonFiles/GenerateCommonFilesArguments";

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
        let generateCommonFilesArguments = new GenerateCommonFilesArguments();
        generateCommonFilesArguments.yeomanGenerator = this;
        generateCommonFilesArguments.extension = Defaults.extension;
        generateCommonFilesArguments.modelsProvider = new ModelsProvider();

        let executor = new GenerateCommonPipelineFilesExecutor(GenerateCommonFilesPipeline.Instance);

        await executor.execute(generateCommonFilesArguments);
    }

    end() {
    }
}

export = PipelinesGenerator
