import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable } from 'inversify';

@injectable()
export class GenerateExportsPipeline implements IPipeline {
    public static readonly Instance = new GenerateExportsPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.TryToGetDirectoryOfExportFiles.Instance,
            Processors.TryToGetFilesToExportFromDestinationDirectory.Instance,
            Processors.TryToDefineDestination.Instance,
            Processors.GenerateExportsRelativePaths.Instance,
            Processors.EnsureExportsFile.Instance,
            Processors.FilterOnlyNeededExports.Instance,
            Processors.UpdateExportsFile.Instance,

        ];
    }
}