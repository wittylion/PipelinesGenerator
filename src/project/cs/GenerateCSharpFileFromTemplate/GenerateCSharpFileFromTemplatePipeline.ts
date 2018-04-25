import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { GenerateFileFromTemplatePipeline } from '../../../feature/GenerateFileFromTemplate/GenerateFileFromTemplatePipeline';

export class GenerateCSharpFileFromTemplatePipeline extends GenerateFileFromTemplatePipeline {
    public static readonly Instance = new GenerateCSharpFileFromTemplatePipeline();

    SetOptions(): IProcessor[] {
        return [
            Processors.AddNameSpaceToOptions.Instance,
            Processors.AddLibraryNameToOptions.Instance,
            ...super.SetOptions(),
        ];
    }
}