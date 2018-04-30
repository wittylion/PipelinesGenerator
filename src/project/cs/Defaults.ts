import { GenerateFileModel } from "../../feature/GenerateFileFromTemplate/models/GenerateFileModel";
import _ from "lodash";
import { GeneratePipelineFileExecutor } from "../../feature/GeneratePipelineFile";
import { GenerateCSharpPipelineFilePipeline } from "./GenerateCSharpPipelineFile/GenerateCSharpPipelineFilePipeline";
import { GenerateProcessorFileExecutor } from "../../feature/GenerateProcessorFile";
import { GenerateCSharpProcessorFile } from "./GenerateCSharpProcessorFile/GenerateCSharpProcessorFilePipeline";
import { GenerateFileFromTemplateExecutor, GenerateFileFromTemplateArguments } from "../../feature/GenerateFileFromTemplate";
import { GenerateCSharpFileFromTemplatePipeline } from "./GenerateCSharpFileFromTemplate/GenerateCSharpFileFromTemplatePipeline";
import { GenerateProcessorModel } from "../../feature/GenerateProcessorFile/models/GenerateProcessorModel";

import Generator = require("yeoman-generator");

export class Defaults {

    public static FileFromTemplateGenerator = new GenerateFileFromTemplateExecutor(GenerateCSharpFileFromTemplatePipeline.Instance);
    public static PipelineGenerator = new GeneratePipelineFileExecutor(GenerateCSharpPipelineFilePipeline.Instance);
    public static ProcessorGenerator;

    public static argumentsModel: GenerateFileModel;
    public static abstractProcessorModel: GenerateFileModel;
    public static pipelineModel: GenerateFileModel;
    public static executorModel: GenerateFileModel;
    public static processorModel: GenerateProcessorModel;
    public static messagesModel: GenerateFileModel;

    public static extension: string = ".cs";

    public static initializeModels(yeomanGenerator: Generator) {
        Defaults.ProcessorGenerator = new GenerateProcessorFileExecutor(
            new GenerateCSharpProcessorFile(
                (model) => GenerateFileFromTemplateExecutor.Instance.execute(
                    new GenerateFileFromTemplateArguments(yeomanGenerator, model)
                )
            )
        );
        
        Defaults.argumentsModel = new GenerateFileModel();
        Defaults.argumentsModel.templateName = "_Arguments.cs.ejs";
        Defaults.argumentsModel.suffix = "Arguments";
        Defaults.argumentsModel.extension = Defaults.extension;
        Defaults.argumentsModel.ensureSuffixInClassName = true;
        Defaults.argumentsModel.ensureSuffixInFileName = true;
        Defaults.argumentsModel.destinationPath = yeomanGenerator.destinationPath();
        
        Defaults.messagesModel = new GenerateFileModel();
        Defaults.messagesModel.templateName = "_messages.cs.ejs";
        Defaults.messagesModel.suffix = "Messages";
        Defaults.messagesModel.extension = Defaults.extension;
        Defaults.messagesModel.ensureSuffixInClassName = true;
        Defaults.messagesModel.ensureSuffixInFileName = true;
        Defaults.messagesModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.abstractProcessorModel = new GenerateFileModel();
        Defaults.abstractProcessorModel.templateName = "_AbstractProcessor.cs.ejs";
        Defaults.abstractProcessorModel.suffix = "Processor";
        Defaults.abstractProcessorModel.extension = Defaults.extension;
        Defaults.abstractProcessorModel.ensureSuffixInClassName = true;
        Defaults.abstractProcessorModel.ensureSuffixInFileName = true;
        Defaults.abstractProcessorModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.pipelineModel = new GenerateFileModel();
        Defaults.pipelineModel.templateName = "_Pipeline.cs.ejs";
        Defaults.pipelineModel.suffix = "Pipeline";
        Defaults.pipelineModel.extension = Defaults.extension;
        Defaults.pipelineModel.ensureSuffixInClassName = true;
        Defaults.pipelineModel.ensureSuffixInFileName = true;
        Defaults.pipelineModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.executorModel = new GenerateFileModel();
        Defaults.executorModel.templateName = "_PipelineExecutor.cs.ejs";
        Defaults.executorModel.suffix = "Executor";
        Defaults.executorModel.extension = Defaults.extension;
        Defaults.executorModel.ensureSuffixInClassName = true;
        Defaults.executorModel.ensureSuffixInFileName = true;
        Defaults.executorModel.destinationPath = yeomanGenerator.destinationPath();

        Defaults.processorModel = new GenerateProcessorModel();
        Defaults.processorModel.templateName = "_PredefinedProcessor.cs.ejs";
        Defaults.processorModel.extension = Defaults.extension;
        Defaults.processorModel.destinationPath = yeomanGenerator.destinationPath();
        Defaults.processorModel.subdirectories.push('Processors');
    }
}