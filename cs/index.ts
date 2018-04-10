import { Defaults } from "../src/project/cs/Defaults";
import { ModelsProvider } from "../src/project/cs/GenerateCommonFiles/ModelsProvider";
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import Generator = require("yeoman-generator");
import _ = require("lodash");

import yosay from "yosay";
import c from "chalk";

class PipelinesGenerator extends Generator {
    initializing() {
        Defaults.initializeModels();
    }

    prompting() {
        this.log(
            yosay(
                `Hello there, this is a ${c.green("C# generator")}. `
                + "You're about to create a new pipeline. "
                + "Let's provide some options."
            )
        );
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
        generateCommonFilesArguments.modelsProvider = new ModelsProvider();
        
        await GenerateCommonPipelineFilesExecutor.Instance.execute(generateCommonFilesArguments);
    }
}

export = PipelinesGenerator
