import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { ProgramFlowPipeline } from '../../../feature/ProgramFlow/ProgramFlowPipeline';

export class TypescriptProgramFlowPipeline extends ProgramFlowPipeline {
    public static readonly Instance = new TypescriptProgramFlowPipeline();

    OtherProcessors(): IProcessor[] {
        return [
            Processors.CreateExports.Instance
        ];
    }
}