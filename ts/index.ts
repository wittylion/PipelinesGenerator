import Generator = require("yeoman-generator");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { ModelsProvider, GenerateCommonFilesPipeline } from "../src/project/ts/GenerateCommonFiles";
import { Defaults } from "../src/project/ts/Defaults";
import { ProgramFlowArguments, ProgramFlowExecutor } from "../src/feature/ProgramFlow";
import { TypescriptProgramFlowPipeline } from "../src/project/ts/TypescriptProgramFlow/TypescriptProgramFlowPipeline";

import yosay from "yosay";
import c from "chalk";
import { GeneratorsProvider } from "../src/project/ts/GenerateCommonFiles/GeneratorsProvider";

class PipelinesGenerator extends Generator {
    initializing() {
        Defaults.initializeModels();
    }

    prompting() {
        this.log(
            yosay(
                `Hello there, this is a ${c.green("Typescript generator")}. `
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

        let executor = new GenerateCommonPipelineFilesExecutor(GenerateCommonFilesPipeline.Instance);

        let programFlowArguments = new ProgramFlowArguments(
            this, 
            ModelsProvider.Instance, 
            GeneratorsProvider.Instance
        );
        programFlowArguments.commonFilesGenerator = executor;
        
        let programFlow = new ProgramFlowExecutor(TypescriptProgramFlowPipeline.Instance);

        let result = await programFlow.execute(programFlowArguments);

        console.log(result.message);
    }

    end() {
    }
}

export = PipelinesGenerator
