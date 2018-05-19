import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { multiInject, injectable } from 'inversify';
import "reflect-metadata";
import GET_NAMESPACE from './ServiceIdentifiers';

@injectable()
export class GetNamespaceFromFolderNamesPipeline implements IPipeline {

    constructor(
        @multiInject(GET_NAMESPACE.PROCESSOR)
        private processors: IProcessor[]
    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.processors,
            Processors.SetDirectoryWithProjectFileAsBase.Instance,
            Processors.SetDestinationDirectoryAsBase.Instance,
            Processors.AddSubdirectoriesToNamespaceName.Instance,
            Processors.GenerateResult.Instance,

        ];
    }
}