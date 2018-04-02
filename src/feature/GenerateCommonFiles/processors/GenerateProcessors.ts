import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";

export class GenerateProcessors extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessors();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {

        for (const model of args.processorsModels) {
            if (!model) {
                args.AddError("You have to specify some data for processor generation.");
                continue;
            }

            if (S(model.templateName).isEmpty()) {
                args.AddError("You have to provide a template name to generate processor.");
                continue;
            }

            if (S(model.className).isEmpty()) {
                args.AddError("You have to provide non-empty name for the processor.");
                continue;
            }

            if (S(model.fileName).isEmpty()) {
                model.fileName = model.className;
            }
            let subfolders = [...args.commonSubfolders, ...model.subdirectories, 'processors'];

            let processorGeneration = new GenerateFileFromTemplateArguments();

            processorGeneration.className = model.className;
            processorGeneration.fileName = model.fileName;
            processorGeneration.extension = args.extension;
            processorGeneration.subdirectoriesNames = subfolders;
            processorGeneration.ensureSuffixInClassName = false;
            processorGeneration.ensureSuffixInFileName = false;
            processorGeneration.templateFileName = model.templateName;
            processorGeneration.yeomanGenerator = args.yeomanGenerator;
            processorGeneration.creationOptions['argumentsClassName'] = args.argumentsModel.generatedClassName;
            processorGeneration.creationOptions['argumentsFileName'] = args.argumentsModel.generatedFileName;
            processorGeneration.creationOptions['abstractProcessorClassName'] = args.abstractProcessorModel.generatedClassName;
            processorGeneration.creationOptions['abstractProcessorFileName'] = args.abstractProcessorModel.generatedFileName;

            await GenerateFileFromTemplateExecutor.Instance.execute(processorGeneration);

            model.generatedClassName = processorGeneration.className;
            model.generatedFileName = processorGeneration.fileName;
        }
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsModels.length > 0;
        return safeCondition;
    }
}
