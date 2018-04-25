import { CSharpYeomanPipeline } from "../../cs/CSharpYeomanPipeline";
import * as Processors from './processors'
import { SitecoreYeomanPipelineArguments } from "./SitecoreYeomanPipelineArguments";

export class SitecoreYeomanPipeline extends CSharpYeomanPipeline {
    pipelineArguments: SitecoreYeomanPipelineArguments;
    constructor(args: string | string[], options: {}) {
        super(args, options);
        this.pipelineArguments = new SitecoreYeomanPipelineArguments(this);
    }

    public initializing(): Promise<void> {
        return Processors.Initializing.Instance.Execute(this.pipelineArguments);
    }

    public prompting(): Promise<void> {
        return Processors.Prompting.Instance.Execute(this.pipelineArguments);
    }
    
    public default(): Promise<void> {
        return Processors.Default.Instance.Execute(this.pipelineArguments);
    }
}