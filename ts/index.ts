import Generator = require("yeoman-generator");
import { Question, Inquirer } from "inquirer";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from '../src/feature/GenerateFileFromTemplate'
import { MessageFilter } from "solid-pipelines";
import path = require("path");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { GenerateFileModel } from "../src/feature/GenerateCommonFiles/GenerateFileModel";
import { EnsureOptionExecutor, EnsureOptionArguments } from "../src/feature/EnsureOption";
import { InputTypeEnum } from "../src/feature/EnsureOption/InputTypeEnum";
import S = require("string");

class PipelinesGenerator extends Generator {
    initializing() {
    }

    prompting() {
    }

    configuring() {

    }

    async default() {
        await this._createPipelineInfrastructure();
    }

    async _createPipelineInfrastructure() {
        const extension = ".ts";

        let generateCommonFilesArguments = new GenerateCommonPipelineFilesArguments();
        generateCommonFilesArguments.extension = extension;
        generateCommonFilesArguments.yeomanGenerator = this;

        generateCommonFilesArguments.argumentsModel = new GenerateFileModel();
        generateCommonFilesArguments.argumentsModel.templateName = "_arguments.ts.ejs";

        generateCommonFilesArguments.abstractProcessorModel = new GenerateFileModel();
        generateCommonFilesArguments.abstractProcessorModel.templateName = "_abstractProcessor.ts.ejs";

        generateCommonFilesArguments.processorsExportsModel = new GenerateFileModel();
        generateCommonFilesArguments.processorsExportsModel.fileName = "index.ts";
        generateCommonFilesArguments.processorsExportsModel.templateName = "_exports.ts.ejs";

        generateCommonFilesArguments.pipelineModel = new GenerateFileModel();
        generateCommonFilesArguments.pipelineModel.templateName = "_pipeline.ts.ejs";
        
        generateCommonFilesArguments.executorModel = new GenerateFileModel();
        generateCommonFilesArguments.executorModel.templateName = "_pipelineExecutor.ts.ejs";
        
        generateCommonFilesArguments.mainExportsModel = new GenerateFileModel();
        generateCommonFilesArguments.mainExportsModel.fileName = "index.ts";
        generateCommonFilesArguments.mainExportsModel.templateName = "_exports.ts.ejs";

        await GenerateCommonPipelineFilesExecutor.Instance.execute(generateCommonFilesArguments);

        let messages = generateCommonFilesArguments.GetMessages(MessageFilter.Errors | MessageFilter.Warnings);
        if (messages.length > 0) {
            this.log(messages.map(x => x.Message).join('\n'));
        }
    }

    end() {
    }
}

export = PipelinesGenerator
