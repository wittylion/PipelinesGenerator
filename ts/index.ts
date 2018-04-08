import Generator = require("yeoman-generator");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { ModelsProvider, GenerateCommonFilesPipeline } from "../src/project/ts/GenerateCommonFiles";
import { Defaults } from "../src/project/ts/Defaults";
import { GenerateCommonFilesArguments } from "../src/project/ts/GenerateCommonFiles/GenerateCommonFilesArguments";
import { ProgramFlowArguments, ProgramFlowExecutor } from "../src/feature/ProgramFlow";
import { TypescriptProgramFlowPipeline } from "../src/project/ts/TypescriptProgramFlow/TypescriptProgramFlowPipeline";

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

        let programFlowArguments = new ProgramFlowArguments();
        programFlowArguments.yeomanGenerator = this;
        programFlowArguments.commonFilesGenerator = executor;
        programFlowArguments.commonFilesGeneratorArguments = generateCommonFilesArguments;
        let programFlow = new ProgramFlowExecutor(TypescriptProgramFlowPipeline.Instance);

        let result = await programFlow.execute(programFlowArguments);

        console.log(result.message);
    }

    end() {
    }
}

export = PipelinesGenerator
