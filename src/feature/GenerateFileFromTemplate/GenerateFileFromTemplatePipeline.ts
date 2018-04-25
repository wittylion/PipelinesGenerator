import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateFileFromTemplatePipeline implements IPipeline {
    public static readonly Instance = new GenerateFileFromTemplatePipeline();

    GetProcessors(): IProcessor[] {
        return [
            ...this.BeforeFileGeneration(),
            ...this.SetOptions(),
            ...this.GenerateFileProcessors()
        ];
    }

    BeforeFileGeneration(): IProcessor[] {
        return [
            Processors.ValidateGenerator.Instance,
            Processors.EnsureFileNameIsSet.Instance,
            Processors.EnsureTemplateDestination.Instance,
            Processors.ValidateTemplateDestination.Instance,
            Processors.EnsureSuffixInFileName.Instance,
            Processors.EnsureExtensionInFileName.Instance,
            Processors.EnsureSuffixInClassName.Instance,
            Processors.EnsureClassNameAsLeadingSubdirectory.Instance,
            Processors.AdjustCaseOfSubdirectories.Instance,
            Processors.EnsureDestination.Instance,
        ];
    }

    SetOptions(): IProcessor[] {
        return [
            Processors.FillCreationOptions.Instance,
        ];
    }

    GenerateFileProcessors(): IProcessor[] {

        return [
            Processors.CreateFileFromTemplate.Instance,
            Processors.GenerateResult.Instance,
        ];
    }
}