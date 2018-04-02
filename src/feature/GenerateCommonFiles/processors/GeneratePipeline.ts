import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";

export class GeneratePipeline extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GeneratePipeline();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.pipelineModel;
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for pipeline file to be generated.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name for pipeline file to be generated.");
            return;
        }

        if (S(model.className).isEmpty()) {
            model.className = args.pipelineNameSpecifiedByUser;
        }

        if (S(model.fileName).isEmpty()) {
            model.fileName = args.pipelineNameSpecifiedByUser;
        }

        let subfolders = [...args.commonSubfolders, ...model.subdirectories];
        let pipelineGeneration = new GenerateFileFromTemplateArguments();

        pipelineGeneration.className = model.className;
        pipelineGeneration.fileName = model.fileName;
        pipelineGeneration.extension = args.extension;
        pipelineGeneration.subdirectoriesNames = subfolders;
        pipelineGeneration.ensureSuffixInClassName = true;
        pipelineGeneration.ensureSuffixInFileName = true;
        pipelineGeneration.templateFileName = model.templateName;
        pipelineGeneration.creationOptions['processors'] = args.processorsModels.map(x => x.generatedClassName);
        pipelineGeneration.yeomanGenerator = args.yeomanGenerator;
        pipelineGeneration.suffix = "Pipeline";

        await GenerateFileFromTemplateExecutor.Instance.execute(pipelineGeneration);

        model.generatedClassName = pipelineGeneration.className;
        model.generatedFileName = pipelineGeneration.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = !!args.pipelineModel;
        return safeCondition;
    }
}
