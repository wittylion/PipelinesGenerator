import { GenerateFileModel } from "../../feature/GenerateCommonFiles/GenerateFileModel";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static processorsExportsModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static mainExportsModel: GenerateFileModel;
    public static processorModel: GenerateFileModel;

    public static extension: string = ".ts";

    public static initializeModels() {
        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_arguments.ts.ejs";

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_abstractProcessor.ts.ejs";

        Defaults.processorsExportsModel = new GenerateFileModel();
        Defaults.processorsExportsModel.fileName = "index.ts";
        Defaults.processorsExportsModel.templateName = "_exports.ts.ejs";

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_pipeline.ts.ejs";

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_pipelineExecutor.ts.ejs";

        Defaults.mainExportsModel = new GenerateFileModel();
        Defaults.mainExportsModel.fileName = "index.ts";
        Defaults.mainExportsModel.templateName = "_exports.ts.ejs";
        
        Defaults.processorModel = new GenerateFileModel();
        Defaults.processorModel.templateName = "_predefinedProcessor.ts.ejs";
    }
}