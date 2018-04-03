import { SafeProcessor } from "solid-pipelines";
import { ObtainOptionArguments } from "./ObtainOptionArguments";

export abstract class ObtainOptionProcessor extends SafeProcessor<ObtainOptionArguments> { 
    SafeCondition(args: ObtainOptionArguments): boolean {
        return super.SafeCondition(args) && !args.IsAborted;
    }
}
