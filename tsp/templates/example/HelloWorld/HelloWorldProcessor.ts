import { SafeProcessor } from "solid-pipelines";
import { HelloWorldArguments } from "./HelloWorldArguments";

export abstract class HelloWorldProcessor 
    extends SafeProcessor<HelloWorldArguments> {
    public async SafeExecute(args: HelloWorldArguments): Promise<void> {
        await this.SafeProcessorExecute(args);
    }

    public abstract SafeProcessorExecute(args: HelloWorldArguments): Promise<void>;

    public SafeCondition(args: HelloWorldArguments): boolean {
        return super.SafeCondition(args) && this.SafeProcessorCondition(args);
    }
    
    public SafeProcessorCondition(args: HelloWorldArguments): boolean {
        return true;
    }
}
