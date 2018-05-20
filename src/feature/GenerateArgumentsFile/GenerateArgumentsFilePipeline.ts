import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import "reflect-metadata";
import { injectable, inject, multiInject } from "inversify";
import GENERATE_ARGUMENTS_FILE from "./ServiceIdentifiers";

@injectable()
export class GenerateArgumentsFilePipeline implements IPipeline {

    /**
     *
     */
    constructor(

        @multiInject(GENERATE_ARGUMENTS_FILE.PROCESSOR)
        public processors: IProcessor[]

    ) {

    }

    GetProcessors(): IProcessor[] {
        return [
            Processors.EnsureMembers.Instance,
            Processors.EnsureFileModel.Instance,
            ...this.processors
        ];
    }
}