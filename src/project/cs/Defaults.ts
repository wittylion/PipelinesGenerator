import { GenerateFileModel } from "../../feature/GenerateCommonFiles/GenerateFileModel";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static processorModel: GenerateFileModel;

    public static extension: string = ".cs";

    public static initializeModels() {
        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_Arguments.cs.ejs";

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_AbstractProcessor.cs.ejs";

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_Pipeline.cs.ejs";

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_PipelineExecutor.cs.ejs";
        
        Defaults.processorModel = new GenerateFileModel();
        Defaults.processorModel.templateName = "_PredefinedProcessor.cs.ejs";
    }
}