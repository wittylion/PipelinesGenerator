import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import path = require('path');

export class GenerateProcessorsExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessorsExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.processorsExportsModel;
        let subfolders = [...args.commonSubfolders, ...model.subdirectories, 'processors'];
        let processorsExportsGeneration = new GenerateFileFromTemplateArguments();

        processorsExportsGeneration.fileName = model.fileName;
        processorsExportsGeneration.extension = args.extension;
        processorsExportsGeneration.subdirectoriesNames = subfolders;
        processorsExportsGeneration.ensureSuffixInClassName = false;
        processorsExportsGeneration.ensureSuffixInFileName = false;
        processorsExportsGeneration.templateFileName = model.templateName;
        processorsExportsGeneration.creationOptions['exportFileNames'] = 
            args.processorsModels.map(x => path.basename(x.generatedFileName, '.ts'));
        processorsExportsGeneration.yeomanGenerator = args.yeomanGenerator;

        await GenerateFileFromTemplateExecutor.Instance.execute(processorsExportsGeneration);

        model.generatedFileName = processorsExportsGeneration.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
