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

        await GenerateCommonPipelineFilesExecutor.Instance.execute(generateCommonFilesArguments);

        let messages = generateCommonFilesArguments.GetMessages(MessageFilter.All);
        if (messages.length > 0) {
            console.log(messages);
        }

        let abstractProcessorGeneration = new GenerateFileFromTemplateArguments();

        abstractProcessorGeneration.className = pipelineName;
        abstractProcessorGeneration.extension = extension;
        abstractProcessorGeneration.subdirectoriesNames = subfolders;
        abstractProcessorGeneration.ensureSuffixInClassName = true;
        abstractProcessorGeneration.ensureSuffixInFileName = true;
        abstractProcessorGeneration.templateFileName = "_abstractProcessor.ts.ejs";
        abstractProcessorGeneration.yeomanGenerator = this;
        abstractProcessorGeneration.creationOptions['argumentsClassName'] = generateCommonFilesArguments.argumentsModel.generatedClassName;
        abstractProcessorGeneration.creationOptions['argumentsFileName'] = generateCommonFilesArguments.argumentsModel.generatedFileName;
        abstractProcessorGeneration.suffix = "Processor";

        await GenerateFileFromTemplateExecutor.Instance.execute(abstractProcessorGeneration);
        
        let generatedProcessors = [];
        for (const processorName of processors) {        
            let processorGeneration = new GenerateFileFromTemplateArguments();

            processorGeneration.className = processorName;
            processorGeneration.extension = extension;
            processorGeneration.subdirectoriesNames = [...subfolders, "processors"];
            processorGeneration.ensureSuffixInClassName = false;
            processorGeneration.ensureSuffixInFileName = false;
            processorGeneration.templateFileName = "_predefinedProcessor.ts.ejs";
            processorGeneration.yeomanGenerator = this;
            processorGeneration.creationOptions['argumentsClassName'] = generateCommonFilesArguments.argumentsModel.generatedClassName;
            processorGeneration.creationOptions['argumentsFileName'] = generateCommonFilesArguments.argumentsModel.generatedFileName;
            processorGeneration.creationOptions['abstractProcessorClassName'] = abstractProcessorGeneration.className;
            processorGeneration.creationOptions['abstractProcessorFileName'] = abstractProcessorGeneration.fileName;
    
            await GenerateFileFromTemplateExecutor.Instance.execute(processorGeneration);

            generatedProcessors.push({
                className: processorGeneration.className,
                fileName: processorGeneration.fileName
            });
        }
        
        let processorsExportsGeneration = new GenerateFileFromTemplateArguments();

        processorsExportsGeneration.fileName = "index.ts";
        processorsExportsGeneration.extension = extension;
        processorsExportsGeneration.subdirectoriesNames = [...subfolders, 'processors'];
        processorsExportsGeneration.ensureSuffixInClassName = false;
        processorsExportsGeneration.ensureSuffixInFileName = false;
        processorsExportsGeneration.templateFileName = "_exports.ts.ejs";
        processorsExportsGeneration.creationOptions['exportFileNames'] = generatedProcessors.map(x => path.basename(x.fileName, '.ts'));
        processorsExportsGeneration.yeomanGenerator = this;
        
        await GenerateFileFromTemplateExecutor.Instance.execute(processorsExportsGeneration);

        let pipelineGeneration = new GenerateFileFromTemplateArguments();

        pipelineGeneration.className = pipelineName;
        pipelineGeneration.extension = extension;
        pipelineGeneration.subdirectoriesNames = subfolders;
        pipelineGeneration.ensureSuffixInClassName = true;
        pipelineGeneration.ensureSuffixInFileName = true;
        pipelineGeneration.templateFileName = "_pipeline.ts.ejs";
        pipelineGeneration.creationOptions['processors'] = generatedProcessors.map(x => x.className);
        pipelineGeneration.yeomanGenerator = this;
        pipelineGeneration.suffix = "Pipeline";

        await GenerateFileFromTemplateExecutor.Instance.execute(pipelineGeneration);

        let executorGeneration = new GenerateFileFromTemplateArguments();

        executorGeneration.className = pipelineName;
        executorGeneration.extension = extension;
        executorGeneration.subdirectoriesNames = subfolders;
        executorGeneration.ensureSuffixInClassName = true;
        executorGeneration.ensureSuffixInFileName = true;
        executorGeneration.templateFileName = "_pipelineExecutor.ts.ejs";
        executorGeneration.yeomanGenerator = this;
        executorGeneration.creationOptions['argumentsClassName'] = generateCommonFilesArguments.argumentsModel.generatedClassName;
        executorGeneration.creationOptions['argumentsFileName'] = generateCommonFilesArguments.argumentsModel.generatedFileName;
        executorGeneration.creationOptions['pipelineClassName'] = pipelineGeneration.className;
        executorGeneration.creationOptions['pipelineFileName'] = pipelineGeneration.fileName;
        executorGeneration.suffix = "Executor";

        await GenerateFileFromTemplateExecutor.Instance.execute(executorGeneration);

        let mainExportsGeneration = new GenerateFileFromTemplateArguments();

        mainExportsGeneration.fileName = "index.ts";
        mainExportsGeneration.extension = extension;
        mainExportsGeneration.subdirectoriesNames = subfolders;
        mainExportsGeneration.ensureSuffixInClassName = false;
        mainExportsGeneration.ensureSuffixInFileName = false;
        mainExportsGeneration.templateFileName = "_exports.ts.ejs";
        mainExportsGeneration.creationOptions['exportFileNames'] = [
            path.basename(executorGeneration.fileName, extension), 
            path.basename(generateCommonFilesArguments.argumentsModel.generatedFileName, extension)
        ];
        mainExportsGeneration.yeomanGenerator = this;
        
        await GenerateFileFromTemplateExecutor.Instance.execute(mainExportsGeneration);
    }
}

export = PipelinesGenerator
