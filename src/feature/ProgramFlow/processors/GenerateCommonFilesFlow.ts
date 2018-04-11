import { ProgramFlowProcessor } from "../ProgramFlowProcessor";
import { ProgramFlowArguments } from "../ProgramFlowArguments";
import { MessageFilter } from "solid-pipelines";
import { GenerateCommonPipelineFilesArguments } from "../../GenerateCommonFiles";

export class GenerateCommonFilesFlow extends ProgramFlowProcessor {
    public static readonly Instance = new GenerateCommonFilesFlow();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        
        let commonFilesGeneratorArguments = new GenerateCommonPipelineFilesArguments(args.yeomanGenerator);
        commonFilesGeneratorArguments.modelsProvider = args.modelsProvider;
        commonFilesGeneratorArguments.generatorsProvider = args.generatorsProvider;
        await args.commonFilesGenerator.execute(commonFilesGeneratorArguments);

        args.AddMessageObjects(
            commonFilesGeneratorArguments.GetAllMessages());
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = !!args.commonFilesGenerator;
        return safeCondition;
    }
}
