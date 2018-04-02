import Generator = require("yeoman-generator");
import { Question, Inquirer } from "inquirer";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from '../src/feature/GenerateFileFromTemplate'
import { MessageFilter } from "solid-pipelines";
import path = require("path");
import { GenerateCommonPipelineFilesArguments, GenerateCommonPipelineFilesExecutor } from "../src/feature/GenerateCommonFiles";
import { GenerateFileModel } from "../src/feature/GenerateCommonFiles/GenerateFileModel";

class PipelinesGenerator extends Generator {
    answersListener: Promise<Generator.Answers>;

    constructor(args: string | string[], options: {}) {
        super(args, options);

        let subfolderArgumentConfig: Generator.OptionConfig = {
            description: "Specififes, whether to create a subfolder for the current item.",
            default: false
        };
        this.option("subfolder", subfolderArgumentConfig);
    }

    initializing() {
    }

    async prompting() {
        var pipelineNameQuestion: Question = {
            type: 'input',
            name: 'pipelineName',
            message: 'Enter a pipeline name: ',
            default: 'HelloWorld'
        };

        var processorsNameQuestion: Question = {
            type: 'input',
            name: 'processorNames',
            message: 'Enter processors names (separate them via whitespace): ',
            default: 'HelloWorld'
        };

        var questions: Generator.Question[] = [
            pipelineNameQuestion,
            processorsNameQuestion
        ];

        this.answersListener = this.prompt(questions);
    }

    configuring() {

    }

    async default() {
        var answers: Generator.Answers = await this.answersListener;
        var pipelineName: string = answers["pipelineName"];
        var processorNames: string = answers["processorNames"];
        var processorNameStrings: string[] = processorNames.split(' ');

        await this._createPipelineInfrastructure(pipelineName, processorNameStrings, this.options["subfolder"]);
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

        let messages = generateCommonFilesArguments.GetMessages(MessageFilter.All);
        if (messages.length > 0) {
            console.log(messages);
        }
    }
}

export = PipelinesGenerator
