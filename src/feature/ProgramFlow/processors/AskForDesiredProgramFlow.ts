import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from "../../GenerateCommonFiles";
import { ChooseProgramFlowArguments, ChooseProgramFlowExecutor } from "../../ChooseProgramFlow";

export class AskForDesiredProgramFlow extends ProgramFlowProcessor {
    public static readonly Instance = new AskForDesiredProgramFlow();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        
        let commonFilesGeneratorArguments = new ChooseProgramFlowArguments(args.yeomanGenerator);
        args.selectedDesiredFlow = await ChooseProgramFlowExecutor.Instance.execute(commonFilesGeneratorArguments);

        args.AddMessageObjects(
            commonFilesGeneratorArguments.GetAllMessages());
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
