import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'

export class HelloWorldPipeline implements IPipeline {
    public static readonly Instance = new HelloWorldPipeline();

    GetProcessors(): IProcessor[] {
        return [
            this.GetComposeMessageInstance(),
            this.GetSayMessageInstance(),
        ];
    }
    
    public GetComposeMessageInstance(): IProcessor {
        return Processors.ComposeMessage.Instance;
    }
    
    public GetSayMessageInstance(): IProcessor {
        return Processors.SayMessage.Instance;
    }
}