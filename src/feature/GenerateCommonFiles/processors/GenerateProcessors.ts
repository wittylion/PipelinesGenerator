import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");

export class GenerateProcessors extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessors();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {

        let processorsModels = args.processorsNames.map(processor => {
            let model = args.modelsProvider.getProcessorModel();
            model.className = processor;
            model.fileName = processor;
            return model;
        });

        for (const model of processorsModels) {
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
            model.subdirectories = [...args.commonSubfolders, ...model.subdirectories, 'processors'];

            let processorGeneration = new GenerateFileFromTemplateArguments();

            processorGeneration.fileModel = model;
            processorGeneration.yeomanGenerator = args.yeomanGenerator;

            processorGeneration.creationOptions['argumentsClassName'] = args.generatedArgumentsClassName;
            processorGeneration.creationOptions['argumentsFileName']
                = path.basename(
                    args.generatedArgumentsFileName,
                    args.extension
                );

            processorGeneration.creationOptions['abstractProcessorClassName'] = args.generatedProcessorClassName;
            processorGeneration.creationOptions['abstractProcessorFileName']
                = path.basename(
                    args.generatedProcessorFileName,
                    args.extension
                );

            await GenerateFileFromTemplateExecutor.Instance.execute(processorGeneration);
        }
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.length > 0;
        return safeCondition;
    }
}
