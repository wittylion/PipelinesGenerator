import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import _ from "lodash";

export class Defaults {

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static processorModel: GenerateFileModel;
    public static messagesModel: GenerateFileModel;

    public static extension: string = ".cs";

    public static commonSubdirectoryCaseTuner(x: string): string {
        return _.upperFirst(_.camelCase(x));
    }

    public static initializeModels() {
        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_Arguments.cs.ejs";
        Defaults.argumentsModel.suffix = "Arguments";
        Defaults.argumentsModel.extension = Defaults.extension;
        Defaults.argumentsModel.ensureSuffixInClassName = true;
        Defaults.argumentsModel.ensureSuffixInFileName = true;
        Defaults.argumentsModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;
        
        Defaults.messagesModel = new GenerateFileModel();
        Defaults.messagesModel.templateName = "_messages.cs.ejs";
        Defaults.messagesModel.suffix = "Messages";
        Defaults.messagesModel.extension = Defaults.extension;
        Defaults.messagesModel.ensureSuffixInClassName = true;
        Defaults.messagesModel.ensureSuffixInFileName = true;
        Defaults.messagesModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_AbstractProcessor.cs.ejs";
        Defaults.abstractProcessorModel.suffix = "Processor";
        Defaults.abstractProcessorModel.extension = Defaults.extension;
        Defaults.abstractProcessorModel.ensureSuffixInClassName = true;
        Defaults.abstractProcessorModel.ensureSuffixInFileName = true;
        Defaults.abstractProcessorModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_Pipeline.cs.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = Defaults.extension;
        Defaults.pipelineModel.ensureSuffixInClassName = true;
        Defaults.pipelineModel.ensureSuffixInFileName = true;
        Defaults.pipelineModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_PipelineExecutor.cs.ejs";
        Defaults.executorModel.suffix = "Executor";
        Defaults.executorModel.extension = Defaults.extension;
        Defaults.executorModel.ensureSuffixInClassName = true;
        Defaults.executorModel.ensureSuffixInFileName = true;
        Defaults.executorModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;

        Defaults.processorModel = new GenerateFileModel();
        Defaults.processorModel.templateName = "_PredefinedProcessor.cs.ejs";
        Defaults.processorModel.extension = Defaults.extension;
        Defaults.processorModel.subdirectoryNameTuner = Defaults.commonSubdirectoryCaseTuner;
    }
}