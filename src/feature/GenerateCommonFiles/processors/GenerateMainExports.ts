import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");

export class GenerateMainExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateMainExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.mainExportsModel = args.modelsProvider.getMainExportsModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for index.ts file to be generated.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name for index.ts file to be generated.");
            return;
        }

        if (S(model.fileName).isEmpty()) {
            model.fileName = "index.ts";
        }

        let subfolders = [...args.commonSubfolders, ...model.subdirectories];

        let mainExportsGeneration = new GenerateFileFromTemplateArguments();

        mainExportsGeneration.fileName = model.fileName;
        mainExportsGeneration.extension = args.extension;
        mainExportsGeneration.subdirectoriesNames = subfolders;
        mainExportsGeneration.ensureSuffixInClassName = false;
        mainExportsGeneration.ensureSuffixInFileName = false;
        mainExportsGeneration.templateFileName = model.templateName;
        mainExportsGeneration.creationOptions['exportFileNames'] = [
            path.basename(args.executorModel.generatedFileName, args.extension),
            path.basename(args.argumentsModel.generatedFileName, args.extension)
        ];
        mainExportsGeneration.yeomanGenerator = args.yeomanGenerator;
        mainExportsGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(mainExportsGeneration);

        model.generatedFileName = mainExportsGeneration.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = !!args.mainExportsModel;
        return safeCondition;
    }
}
