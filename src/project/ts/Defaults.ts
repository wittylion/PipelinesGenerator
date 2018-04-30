import Generator = require("yeoman-generator");

import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import { GenerateTypescriptProcessorFilePipeline } from "./GenerateTypescriptProcessorFile/GenerateTypescriptProcessorFilePipeline";
import { GenerateProcessorFileExecutor } from "../../feature/GenerateProcessorFile";
import { GenerateTypescriptExecutorFilePipeline } from "./GenerateTypescriptExecutorFile/GenerateTypescriptExecutorFilePipeline";
import { GenerateExecutorFileExecutor } from "../../feature/GenerateExecutorFile";
import { GenerateTypescriptArgumentsFilePipeline } from "./GenerateTypescriptArgumentsFile/GenerateTypescriptArgumentsFilePipeline";
import { GenerateArgumentsFileExecutor } from "../../feature/GenerateArgumentsFile";
import { GenerateCommonPipelineFilesExecutor, GenerateCommonPipelineFilesArguments } from "../../feature/GenerateCommonFiles";
import { GenerateCommonFilesPipeline } from "./GenerateCommonFiles";
import { GenerateTypescriptAbstractProcessorFilePipeline } from "./GenerateTypescriptAbstractProcessorFile/GenerateTypescriptAbstractProcessorFilePipeline";
import { GenerateAbstractProcessorFileExecutor } from "../../feature/GenerateAbstractProcessorFile/GenerateAbstractProcessorFileExecutor";
import { GenerateProcessorModel } from "../../feature/GenerateProcessorFile/models/GenerateProcessorModel";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from "../../feature/GenerateFileFromTemplate";
import { GenerateExportsExecutor, GenerateExportsArguments } from "./GenerateExports";
import { GenerateFileFromTemplatePipeline } from "../../feature/GenerateFileFromTemplate/GenerateFileFromTemplatePipeline";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static processorsExportsModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static mainExportsModel: GenerateFileModel;
    public static processorModel: GenerateProcessorModel;
    public static messagesModel: GenerateFileModel;

    public static FileFromTemplateGenerator;
    public static AbstractProcessorGenerator = new GenerateAbstractProcessorFileExecutor(GenerateTypescriptAbstractProcessorFilePipeline.Instance);
    public static ProcessorGenerator: GenerateProcessorFileExecutor;
    public static ArgumentsGenerator = new GenerateArgumentsFileExecutor(GenerateTypescriptArgumentsFilePipeline.Instance);
    public static ExecutorGenerator = new GenerateExecutorFileExecutor(GenerateTypescriptExecutorFilePipeline.Instance);
    public static CommonFilesGenerator = new GenerateCommonPipelineFilesExecutor(GenerateCommonFilesPipeline.Instance);

    public static exportDeclaration: string = "export {{classes}} from '{{file}}'";

    public static extension: string = ".ts";

    public static initializeModels(yeomanGenerator: Generator) {

        Defaults.FileFromTemplateGenerator = new GenerateFileFromTemplateExecutor(
            new GenerateFileFromTemplatePipeline(
                { ensure: async (template: string) => yeomanGenerator.templatePath(template) },
                { ensure: async (template: string) => yeomanGenerator.destinationPath(template) },
                { check: async(path: string) => yeomanGenerator.fs.exists(path) },
                { generate: async (...args) => yeomanGenerator.fs.copyTpl(args[0], args[1], args[2]) }
            )
        );

        Defaults.ProcessorGenerator = new GenerateProcessorFileExecutor(
            new GenerateTypescriptProcessorFilePipeline(
                (model) => Defaults.FileFromTemplateGenerator.execute(
                    new GenerateFileFromTemplateArguments(model)
                ),
                (model) => GenerateExportsExecutor.Instance.exportAllFiles(
                    yeomanGenerator,
                    model.getSubdirectory(),
                    model.fileName
                )
            )
        );

        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_arguments.ts.ejs";
        Defaults.argumentsModel.suffix = "Arguments";
        Defaults.argumentsModel.extension = Defaults.extension;
        Defaults.argumentsModel.ensureSuffixInClassName = true;
        Defaults.argumentsModel.ensureSuffixInFileName = true;
        Defaults.argumentsModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.messagesModel = new GenerateFileModel();
        Defaults.messagesModel.templateName = "_messages.ts.ejs";
        Defaults.messagesModel.suffix = "Messages";
        Defaults.messagesModel.extension = Defaults.extension;
        Defaults.messagesModel.ensureSuffixInClassName = true;
        Defaults.messagesModel.ensureSuffixInFileName = true;
        Defaults.messagesModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_abstractProcessor.ts.ejs";
        Defaults.abstractProcessorModel.suffix = "Processor";
        Defaults.abstractProcessorModel.extension = Defaults.extension;
        Defaults.abstractProcessorModel.ensureSuffixInClassName = true;
        Defaults.abstractProcessorModel.ensureSuffixInFileName = true;
        Defaults.abstractProcessorModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.processorsExportsModel = new GenerateFileModel();
        Defaults.processorsExportsModel.fileName = "index";
        Defaults.processorsExportsModel.templateName = "_exports.ts.ejs";
        Defaults.processorsExportsModel.extension = Defaults.extension;
        Defaults.processorsExportsModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_pipeline.ts.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = Defaults.extension;
        Defaults.pipelineModel.ensureSuffixInClassName = true;
        Defaults.pipelineModel.ensureSuffixInFileName = true;
        Defaults.pipelineModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_pipelineExecutor.ts.ejs";
        Defaults.executorModel.suffix = "Executor";
        Defaults.executorModel.extension = Defaults.extension;
        Defaults.executorModel.ensureSuffixInClassName = true;
        Defaults.executorModel.ensureSuffixInFileName = true;
        Defaults.executorModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.mainExportsModel = new GenerateFileModel();
        Defaults.mainExportsModel.fileName = "index";
        Defaults.mainExportsModel.templateName = "_exports.ts.ejs";
        Defaults.mainExportsModel.extension = Defaults.extension;
        Defaults.mainExportsModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.processorModel = new GenerateProcessorModel();
        Defaults.processorModel.templateName = "_predefinedProcessor.ts.ejs";
        Defaults.processorModel.extension = Defaults.extension;
        Defaults.processorModel.subdirectories.push('processors');
        Defaults.processorModel.destinationPath = yeomanGenerator.destinationPath();
    }
}