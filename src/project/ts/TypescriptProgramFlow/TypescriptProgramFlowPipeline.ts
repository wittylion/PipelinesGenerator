import { IPipeline, IProcessor } from 'solid-pipelines'
import { ProgramFlowPipeline } from '../../../feature/ProgramFlow/ProgramFlowPipeline';
import { multiInject, inject } from 'inversify';
import PROGRAM_FLOW from '../../../feature/ProgramFlow/ServiceIdentifiers';
import YEOMAN from '../../../foundation/YeomanPipeline/ServiceIdentifiers';
import Generator = require("yeoman-generator");
import { CreateExports } from './processors';

export class TypescriptProgramFlowPipeline extends ProgramFlowPipeline {
    
    constructor(
        
        @inject(CreateExports)
        private createExports: IProcessor,

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