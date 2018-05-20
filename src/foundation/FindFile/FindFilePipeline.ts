import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable, multiInject } from 'inversify';
import FIND_FILE from './ServiceIdentifiers';

@injectable()
export class FindFilePipeline implements IPipeline {

    /**
     *
     */
    constructor(

        @multiInject(FIND_FILE.PROCESSOR)
        public processors: IProcessor[]

    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.processors,
            Processors.FindFilesInCollectedDirectories.Instance,
        ];
    }
}