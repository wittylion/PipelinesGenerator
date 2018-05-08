import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { ProgramFlowPipeline } from '../../../feature/ProgramFlow/ProgramFlowPipeline';

export class TypescriptProgramFlowPipeline extends ProgramFlowPipeline {
    OtherProcessors(): IProcessor[] {
        return [
            Processors.CreateExports.Instance
        ];
    }
}