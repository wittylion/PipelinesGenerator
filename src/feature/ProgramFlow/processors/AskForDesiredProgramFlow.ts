import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from "../../GenerateCommonFiles";
import { ChooseProgramFlowArguments, ChooseProgramFlowExecutor } from "../../ChooseProgramFlow";
import { inject, injectable } from "inversify";
import { ChooseProgramFlowPredefinedExecutor } from "../../ChooseProgramFlow/ChooseProgramFlowPredefinedExecutor";
import CHOOSE_PROGRAM_FLOW from "../../ChooseProgramFlow/ServiceIdentifiers";
import "reflect-metadata";

@injectable()
export class AskForDesiredProgramFlow extends ProgramFlowProcessor {

    constructor(

        @inject(CHOOSE_PROGRAM_FLOW.PREDEFINED_EXECUTOR)
        public programFlowQuestion: ChooseProgramFlowPredefinedExecutor

    ) {
        super();
    }

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        args.selectedDesiredFlow = await this.programFlowQuestion.executeQuery(x => x.GetResult());
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
