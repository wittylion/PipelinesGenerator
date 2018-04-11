import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { MessageFilter } from "solid-pipelines";

export class GenerateCommonFilesFlow extends ProgramFlowProcessor {
    public static readonly Instance = new GenerateCommonFilesFlow();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        await args.commonFilesGenerator.execute(args.commonFilesGeneratorArguments);

        args.AddMessageObjects(
            args.commonFilesGeneratorArguments.GetAllMessages());
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = !!args.commonFilesGenerator && !!args.commonFilesGeneratorArguments!;
        return safeCondition;
    }
}
