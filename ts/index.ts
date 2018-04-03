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
        var pipelineName: string = await EnsureOptionExecutor.obtainByKey(this, "pipelineName");
        var processorNames: string = await EnsureOptionExecutor.obtainByKey(this, "processorNames");
        var processorNameStrings: string[] = processorNames.split(' ');
        var subfolder: boolean = S(await EnsureOptionExecutor.obtainByKey(this, "subfolder", InputTypeEnum.Confirm, true, false)).toBoolean();

        await this._createPipelineInfrastructure(pipelineName, processorNameStrings, subfolder);
    }

    async _createPipelineInfrastructure(pipelineName: string, processors: string[], createSubfolder: boolean = true) {
        const extension = ".ts";
        let subfolders = createSubfolder ? [pipelineName] : [];

        let generateCommonFilesArguments = new GenerateCommonPipelineFilesArguments();
        generateCommonFilesArguments.pipelineNameSpecifiedByUser = pipelineName;
        generateCommonFilesArguments.extension = extension;
        generateCommonFilesArguments.createSubfolderWithPipelineName = createSubfolder;
        generateCommonFilesArguments.yeomanGenerator = this;

        generateCommonFilesArguments.argumentsModel = new GenerateFileModel();
        generateCommonFilesArguments.argumentsModel.templateName = "_arguments.ts.ejs";

        generateCommonFilesArguments.abstractProcessorModel = new GenerateFileModel();
        generateCommonFilesArguments.abstractProcessorModel.templateName = "_abstractProcessor.ts.ejs";

        generateCommonFilesArguments.processorsModels = processors.map(processor => {
            let model = new GenerateFileModel();
            model.className = processor;
            model.templateName = "_predefinedProcessor.ts.ejs";
            return model;
        });

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
