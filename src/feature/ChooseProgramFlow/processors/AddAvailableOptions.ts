import { ChooseProgramFlowProcessor } from "../ChooseProgramFlowProcessor";
import { ChooseProgramFlowArguments } from "../ChooseProgramFlowArguments";
import { ProgramFlowModel } from "../models/ProgramFlowModel";
import { GenerateCommonPipelineFilesExecutor } from "../../GenerateCommonFiles";

export class AddAvailableOptions extends ChooseProgramFlowProcessor {
    public static readonly Instance = new AddAvailableOptions();

    public async SafeExecute(args: ChooseProgramFlowArguments): Promise<void> {
        args.availableFlows.push(
            new ProgramFlowModel(
                GenerateCommonPipelineFilesExecutor.Identifier, 
                "Create a common files structure, including pipeline, processors, arguments etc."
            ),
            new ProgramFlowModel(
                "createProcessor", 
                "Create a single processor"
            ),
        );
    }

    public SafeCondition(args: ChooseProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ChooseProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
