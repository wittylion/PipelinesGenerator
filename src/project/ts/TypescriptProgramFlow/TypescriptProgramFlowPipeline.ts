import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { ProgramFlowPipeline } from '../../../feature/ProgramFlow/ProgramFlowPipeline';
import { multiInject, inject } from 'inversify';
import PROGRAM_FLOW from '../../../feature/ProgramFlow/ServiceIdentifiers';
import YEOMAN from '../../../foundation/YeomanPipeline/ServiceIdentifiers';
import Generator = require("yeoman-generator");

export class TypescriptProgramFlowPipeline extends ProgramFlowPipeline {
    private createExports = new Processors.CreateExports(this.yeomanGenerator);
    
    constructor(
        @inject(YEOMAN.INSTANCE)
        private yeomanGenerator: Generator,

        @multiInject(PROGRAM_FLOW.PROCESSOR)
        public processors: IProcessor[]

    ) {
        super(processors);
    }

    OtherProcessors(): IProcessor[] {
        return [
            this.createExports
        ];
    }
}