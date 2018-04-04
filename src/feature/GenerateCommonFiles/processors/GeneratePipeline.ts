import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import { EnsureFileModelArguments, EnsureFileModelExecutor } from "../../EnsureFileModel";
import { MessageFilter } from "solid-pipelines";

export class GeneratePipeline extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GeneratePipeline();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getPipelineModel();

        let ensurer = EnsureFileModelArguments.Create(
            args.yeomanGenerator,
            model,
            args.pipelineNameSpecifiedByUser,
            args.extension
        );
        await EnsureFileModelExecutor.Instance.execute(ensurer);

        let subfolders = [...args.commonSubfolders, ...model.subdirectories];
        let pipelineGeneration = new GenerateFileFromTemplateArguments();

        pipelineGeneration.fileModel = model;
        pipelineGeneration.creationOptions['processors'] = args.processorsNames;
        pipelineGeneration.yeomanGenerator = args.yeomanGenerator;
        pipelineGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(pipelineGeneration);

        pipelineGeneration.GetMessages(MessageFilter.All).forEach(x => args.AddMessageObject(x));

        args.generatedPipelineClassName = pipelineGeneration.fileModel.className;
        args.generatedPipelineFileName = pipelineGeneration.fileModel.fileName;
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
