import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import { GenerateTypescriptProcessorFilePipeline } from "./GenerateTypescriptProcessorFile/GenerateTypescriptProcessorFilePipeline";
import { GenerateProcessorFileExecutor } from "../../feature/GenerateProcessorFile";
import { GenerateTypescriptExecutorFilePipeline } from "./GenerateTypescriptExecutorFile/GenerateTypescriptExecutorFilePipeline";
import { GenerateExecutorFileExecutor } from "../../feature/GenerateExecutorFile";
import { GenerateTypescriptArgumentsFilePipeline } from "./GenerateTypescriptArgumentsFile/GenerateTypescriptArgumentsFilePipeline";
import { GenerateArgumentsFileExecutor } from "../../feature/GenerateArgumentsFile";
import { GenerateCommonPipelineFilesExecutor } from "../../feature/GenerateCommonFiles";
import { GenerateCommonFilesPipeline } from "./GenerateCommonFiles";
import { GenerateTypescriptAbstractProcessorFilePipeline } from "./GenerateTypescriptAbstractProcessorFile/GenerateTypescriptAbstractProcessorFilePipeline";
import { GenerateAbstractProcessorFileExecutor } from "../../feature/GenerateAbstractProcessorFile/GenerateAbstractProcessorFileExecutor";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static processorsExportsModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static mainExportsModel: GenerateFileModel;
    public static processorModel: GenerateFileModel;
    public static messagesModel: GenerateFileModel;

    public static AbstractProcessorGenerator = new GenerateAbstractProcessorFileExecutor(GenerateTypescriptAbstractProcessorFilePipeline.Instance);
    public static ProcessorGenerator = new GenerateProcessorFileExecutor(GenerateTypescriptProcessorFilePipeline.Instance);
    public static ArgumentsGenerator = new GenerateArgumentsFileExecutor(GenerateTypescriptArgumentsFilePipeline.Instance);
    public static ExecutorGenerator = new GenerateExecutorFileExecutor(GenerateTypescriptExecutorFilePipeline.Instance);
    public static CommonFilesGenerator = new GenerateCommonPipelineFilesExecutor(GenerateCommonFilesPipeline.Instance);

    public static exportDeclaration: string = "export {{classes}} from '{{file}}'";

    public static extension: string = ".ts";

    public static initializeModels() {
        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_arguments.ts.ejs";
        Defaults.argumentsModel.suffix = "Arguments";
        Defaults.argumentsModel.extension = Defaults.extension;
        Defaults.argumentsModel.ensureSuffixInClassName = true;
        Defaults.argumentsModel.ensureSuffixInFileName = true;

        Defaults.messagesModel = new GenerateFileModel();
        Defaults.messagesModel.templateName = "_messages.ts.ejs";
        Defaults.messagesModel.suffix = "Messages";
        Defaults.messagesModel.extension = Defaults.extension;
        Defaults.messagesModel.ensureSuffixInClassName = true;
        Defaults.messagesModel.ensureSuffixInFileName = true;

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_abstractProcessor.ts.ejs";
        Defaults.abstractProcessorModel.suffix = "Processor";
        Defaults.abstractProcessorModel.extension = Defaults.extension;
        Defaults.abstractProcessorModel.ensureSuffixInClassName = true;
        Defaults.abstractProcessorModel.ensureSuffixInFileName = true;

        Defaults.processorsExportsModel = new GenerateFileModel();
        Defaults.processorsExportsModel.fileName = "index";
        Defaults.processorsExportsModel.templateName = "_exports.ts.ejs";
        Defaults.processorsExportsModel.extension = Defaults.extension;

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_pipeline.ts.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = Defaults.extension;
        Defaults.pipelineModel.ensureSuffixInClassName = true;
        Defaults.pipelineModel.ensureSuffixInFileName = true;

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_pipelineExecutor.ts.ejs";
        Defaults.executorModel.suffix = "Executor";
        Defaults.executorModel.extension = Defaults.extension;
        Defaults.executorModel.ensureSuffixInClassName = true;
        Defaults.executorModel.ensureSuffixInFileName = true;

        Defaults.mainExportsModel = new GenerateFileModel();
        Defaults.mainExportsModel.fileName = "index";
        Defaults.mainExportsModel.templateName = "_exports.ts.ejs";
        Defaults.mainExportsModel.extension = Defaults.extension;

        Defaults.processorModel = new GenerateFileModel();
        Defaults.processorModel.templateName = "_predefinedProcessor.ts.ejs";
        Defaults.processorModel.extension = Defaults.extension;
        Defaults.processorModel.subdirectories.push('processors');
    }
}