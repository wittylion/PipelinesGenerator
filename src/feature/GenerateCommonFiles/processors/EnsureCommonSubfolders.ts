import { GenerateCommonPipelineFilesProcessor } from "../GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../GenerateCommonPipelineFilesArguments";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class EnsureCommonSubfolders extends GenerateCommonPipelineFilesProcessor {
    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        args.commonSubfolders.push(args.pipelineNameSpecifiedByUser);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.createSubfolderWithPipelineName;
        return safeCondition;
    }
}
