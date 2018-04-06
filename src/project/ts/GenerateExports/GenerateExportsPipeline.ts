import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GenerateExportsPipeline implements IPipeline {
    public static readonly Instance = new GenerateExportsPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.TryToGetFilesToExport.Instance,
            Processors.TryToDefineDestination.Instance,
            Processors.GenerateExportsRelativePaths.Instance,
            Processors.EnsureExportsFile.Instance,
            Processors.FilterOnlyNeededExports.Instance,
            Processors.UpdateExportsFile.Instance,
        
        ];
    }
}