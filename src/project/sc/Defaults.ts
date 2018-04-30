import { Defaults as CSharpDefaults } from "../../project/cs/Defaults";
import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import _ from "lodash";
import { GenerateProcessorModel } from "../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

import Generator = require("yeoman-generator");

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static processorModel: GenerateProcessorModel;
    public static messagesModel: GenerateFileModel;

    public static initializeModels(yeomanGenerator: Generator) {
        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_Pipeline.config.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = ".config";
        Defaults.pipelineModel.ensureSuffixInClassName = false;
        Defaults.pipelineModel.ensureSuffixInFileName = true;
        Defaults.pipelineModel.subdirectories = ["App_Config"];
        Defaults.pipelineModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.argumentsModel = CSharpDefaults.argumentsModel;
        Defaults.abstractProcessorModel = CSharpDefaults.abstractProcessorModel;
        Defaults.executorModel = CSharpDefaults.executorModel;
        Defaults.processorModel = CSharpDefaults.processorModel;
        Defaults.messagesModel = CSharpDefaults.messagesModel;
    }
}