import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable, multiInject } from 'inversify';
import RESOLVE_FILE_DEPENDENCY from './ServiceIdentifiers';

@injectable()
export class ResolveFileDependencyPipeline implements IPipeline {

    constructor(

        @multiInject(RESOLVE_FILE_DEPENDENCY.PROCESSOR)
        private processors: IProcessor[]

    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.processors,
            Processors.FilterGuesses.Instance,
            Processors.AskWhetherPathIsCorrect.Instance,
            Processors.AskToChoosePathFromSeveralGuesses.Instance,
            Processors.AskPathIfGuessIsNotCorrect.Instance,
            Processors.AskIfFileShouldBeCreatedIfItDoesntExist.Instance,

        ];
    }
}