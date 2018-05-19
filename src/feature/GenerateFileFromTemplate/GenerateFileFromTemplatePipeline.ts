import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateFileFromTemplatePipeline implements IPipeline {

    constructor(
        public templateDestinationEnsurer: DestinationEnsurer,
        public fileDestinationEnsurer: DestinationEnsurer,
        public fileChecker: FileExistanceChecker,
        public fileFromTemplateGenerator: FileFromTemplateGenerator,
    ) {
    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.BeforeFileGeneration(),
            ...this.SetOptions(),
            ...this.GenerateFileProcessors()
        ];
    }

    BeforeFileGeneration(): IProcessor[] {
        return [
            Processors.EnsureFileNameIsSet.Instance,
            new Processors.EnsureTemplateDestination(this.templateDestinationEnsurer),
            new Processors.ValidateTemplateDestination(this.fileChecker),
            Processors.EnsureSuffixInFileName.Instance,
            Processors.EnsureExtensionInFileName.Instance,
            Processors.EnsureSuffixInClassName.Instance,
            Processors.EnsureClassNameAsLeadingSubdirectory.Instance,
            Processors.AdjustCaseOfSubdirectories.Instance,
            new Processors.EnsureDestination(this.fileDestinationEnsurer),
        ];
    }

    SetOptions(): IProcessor[] {
        return [
        ];
    }

    GenerateFileProcessors(): IProcessor[] {

        return [
            Processors.FillCreationOptions.Instance,
            new Processors.CreateFileFromTemplate(this.fileFromTemplateGenerator),
            new Processors.GenerateResult(this.fileChecker),
        ];
    }
}