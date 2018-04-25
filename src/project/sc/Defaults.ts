import { Defaults as CSharpDefaults } from "../../project/cs/Defaults";
import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import _ from "lodash";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static processorModel: GenerateFileModel;
    public static messagesModel: GenerateFileModel;

    public static initializeModels() {
        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_Pipeline.config.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = ".config";
        Defaults.pipelineModel.ensureSuffixInClassName = false;
        Defaults.pipelineModel.ensureSuffixInFileName = true;
        Defaults.pipelineModel.subdirectories = ["App_Config"];

        Defaults.argumentsModel = CSharpDefaults.argumentsModel;
        Defaults.abstractProcessorModel = CSharpDefaults.abstractProcessorModel;
        Defaults.executorModel = CSharpDefaults.executorModel;
        Defaults.processorModel = CSharpDefaults.processorModel;
        Defaults.messagesModel = CSharpDefaults.messagesModel;
    }
}