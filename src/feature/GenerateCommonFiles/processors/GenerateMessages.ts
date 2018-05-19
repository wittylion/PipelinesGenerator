import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../GenerateFileFromTemplate";
import S from "string";
import path = require("path");
import { GenerateMessagesFileArguments, GenerateMessagesFileExecutor } from "../../GenerateMessagesFile";
import "reflect-metadata";
import Generator = require("yeoman-generator");
import { injectable, inject } from "inversify";
import YEOMAN from "../../../foundation/YeomanPipeline/ServiceIdentifiers";
import FILES_GENERATION from "../../../foundation/TypeDefinitions/ServiceIdentifiers";
import { DestinationEnsurer } from "../../../foundation/TypeDefinitions/DestinationEnsurer";

@injectable()
export class GenerateMessages extends GenerateCommonPipelineFilesProcessor {
    constructor(

        @inject(YEOMAN.INSTANCE)
        public yeomanGenerator: Generator,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public destination: DestinationEnsurer,

    ) {
        super();

    }


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

        model.destinationPath = await this.destination.ensure();
        model.subdirectories = [
            ...args.commonSubfolders,
            ...model.subdirectories
        ];

        let messagesGeneration = GenerateMessagesFileArguments.Create(
            model,
            this.yeomanGenerator,
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
