import { HelloWorldProcessor } from "../HelloWorldProcessor";
import { HelloWorldArguments } from "../HelloWorldArguments";

export class ComposeMessage extends HelloWorldProcessor {
    public static readonly Instance = new ComposeMessage();

    public async SafeProcessorExecute(args: HelloWorldArguments): Promise<void> {

        if (args.Name && args.Name.trim().length > 0) {
            args.Message = `Hello, ${args.Name}!`;
        } else {
            args.Message = "Hello, stranger!";
        }
    }

    public SafeProcessorCondition(args: HelloWorldArguments): boolean {
        let safeCondition = !args.Message || args.Message.trim().length === 0;
        return safeCondition;
    }
}
