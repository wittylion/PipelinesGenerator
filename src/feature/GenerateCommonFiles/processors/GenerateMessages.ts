import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateMessagesFileArguments, GenerateMessagesFileExecutor } from "../../GenerateMessagesFile";

export class GenerateMessages extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateMessages();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = args.modelsProvider.getMessagesContainerModel();
        if (!model) {
            args.AbortPipelineWithErrorMessage("You have to specify some data for messages file to be generated.");
            return;
        }

        if (S(model.templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provide a template name for messages file to be generated.");
            return;
        }

        model.destinationPath = args.yeomanGenerator.destinationPath();
        model.subdirectories = [
            ...args.commonSubfolders, 
            ...model.subdirectories
        ];

        let messagesGeneration = GenerateMessagesFileArguments.Create(
            model, 
            args.yeomanGenerator,
            args.generatorsProvider.getFileFromTemplateGenerator(),
            args.pipelineNameSpecifiedByUser
        );

        let result = await GenerateMessagesFileExecutor.Instance.execute(messagesGeneration);

        args.generatedMessages = result.result;
        args.AddMessageObjects(result.messages);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
