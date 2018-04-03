import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateFileFromTemplatePipeline implements IPipeline {
    public static readonly Instance = new GenerateFileFromTemplatePipeline();

    GetProcessors(): IProcessor[] {
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
            Processors.FillCreationOptions.Instance,
            Processors.CreateFileFromTemplate.Instance
        ];
    }
}