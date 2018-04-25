import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { AbstractYeomanPipeline } from '../../../foundation/YeomanPipeline';
import { CSharpYeomanPipelineArguments } from './CSharpYeomanPipelineArguments';

export class CSharpYeomanPipeline extends AbstractYeomanPipeline {
    pipelineArguments: CSharpYeomanPipelineArguments;
    constructor(args: string | string[], options: {}) {
        super(args, options);
        this.pipelineArguments = new CSharpYeomanPipelineArguments(this);
    }

    public initializing(): Promise<void> {
        return Processors.Initializing.Instance.Execute(this.pipelineArguments);
    }
    
    public prompting(): Promise<void> {
        return Processors.Prompting.Instance.Execute(this.pipelineArguments);
    }
    
    public configuring(): Promise<void> {
        return Processors.Configuring.Instance.Execute(this.pipelineArguments);
    }
    
    public default(): Promise<void> {
        return Processors.Default.Instance.Execute(this.pipelineArguments);
    }
    
    public writing(): Promise<void> {
        return Processors.Writing.Instance.Execute(this.pipelineArguments);
    }
    
    public install(): Promise<void> {
        return Processors.Install.Instance.Execute(this.pipelineArguments);
    }
    
    public end(): Promise<void> {
        return Processors.End.Instance.Execute(this.pipelineArguments);
    }
}