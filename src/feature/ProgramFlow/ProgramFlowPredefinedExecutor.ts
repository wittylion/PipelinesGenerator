import { ProgramFlowExecutor } from "./ProgramFlowExecutor";
import { ProgramFlowArguments } from ".";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import PROGRAM_FLOW from "./ServiceIdentifiers";

@injectable()
export class ProgramFlowPredefinedExecutor {
    constructor(

        @inject(PROGRAM_FLOW.EXECUTOR)
        public executor: ProgramFlowExecutor, 
        
        @inject(PROGRAM_FLOW.ARGUMENTS)
        public args: ProgramFlowArguments
    ) {
        
    }

    async execute(): Promise<void> {
        let res = await this.executor.execute(this.args);
        console.log(res.message);
    }
}