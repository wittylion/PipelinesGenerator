import S from "string";
import path = require("path");
import { GenerateCommonPipelineFilesProcessor } from "../../../../feature/GenerateCommonFiles/GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../../../../feature/GenerateCommonFiles";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../../../feature/GenerateFileFromTemplate";
import { Defaults } from "../../Defaults";
import _ from "lodash";

export class GenerateMainExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateMainExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = _.clone(Defaults.mainExportsModel);
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
            path.basename(args.generatedExecutorFileName, args.extension),
            path.basename(args.generatedArgumentsFileName, args.extension)
        ];
        mainExportsGeneration.yeomanGenerator = args.yeomanGenerator;
        mainExportsGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(mainExportsGeneration);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
