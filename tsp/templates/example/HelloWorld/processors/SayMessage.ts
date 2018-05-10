import { HelloWorldProcessor } from "../HelloWorldProcessor";
import { HelloWorldArguments } from "../HelloWorldArguments";

export class SayMessage extends HelloWorldProcessor {
    public static readonly Instance = new SayMessage();

    public async SafeProcessorExecute(args: HelloWorldArguments): Promise<void> {
        console.log(args.Message);
    }

    public SafeProcessorCondition(args: HelloWorldArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
