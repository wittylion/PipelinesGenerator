import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import path = require('path');
import S from "string";

export class GenerateProcessorsExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessorsExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getProcessorsExportsModel();

        if (!model) {
            args.AbortPipelineWithErrorMessage("Cannot find model for the file, exporting processors.");
            return;
        }

        let subfolders = [...args.commonSubfolders, ...model.subdirectories, 'processors'];
        let processorsExportsGeneration = new GenerateFileFromTemplateArguments();

        processorsExportsGeneration.fileName = model.fileName;
        processorsExportsGeneration.extension = args.extension;
        processorsExportsGeneration.subdirectoriesNames = subfolders;
        processorsExportsGeneration.ensureSuffixInClassName = false;
        processorsExportsGeneration.ensureSuffixInFileName = false;
        processorsExportsGeneration.templateFileName = model.templateName;
        processorsExportsGeneration.creationOptions['exportFileNames'] =
            args.processorsNames.map(x => path.basename(x, '.ts'));
        processorsExportsGeneration.yeomanGenerator = args.yeomanGenerator;
        processorsExportsGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(processorsExportsGeneration);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.filter(x => !S(x).isEmpty()).length > 0;
        return safeCondition;
    }
}
