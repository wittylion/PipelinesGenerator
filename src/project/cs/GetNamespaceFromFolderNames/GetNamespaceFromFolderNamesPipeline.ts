import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class GetNamespaceFromFolderNamesPipeline implements IPipeline {
    public static readonly Instance = new GetNamespaceFromFolderNamesPipeline();

    GetProcessors(): IProcessor[] {
        return [
            Processors.TryFindProjectFile.Instance,
            Processors.SetDirectoryWithProjectFileAsBase.Instance,
            Processors.SetDestinationDirectoryAsBase.Instance,
            Processors.AddSubdirectoriesToNamespaceName.Instance,
            Processors.GenerateResult.Instance,
        
        ];
    }
}