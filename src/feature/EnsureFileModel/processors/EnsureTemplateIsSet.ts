import { EnsureFileModelProcessor } from "../EnsureFileModelProcessor";
import { EnsureFileModelArguments } from "../EnsureFileModelArguments";
import { EnsureOptionExecutor } from "../../EnsureOption";
import S from "string";

export class EnsureTemplateIsSet extends EnsureFileModelProcessor {
    public static readonly Instance = new EnsureTemplateIsSet();

    public async SafeExecute(args: EnsureFileModelArguments): Promise<void> {
        let templateName = EnsureOptionExecutor.Instance.obtainByKey(args.yeomanGenerator, "templateName");

        if (S(templateName).isEmpty()) {
            args.AbortPipelineWithErrorMessage("You have to provie template name for the file.");
        }
    }

    public SafeCondition(args: EnsureFileModelArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: EnsureFileModelArguments): boolean {
        let safeCondition = S(args.fileModel.templateName).isEmpty();
        return safeCondition;
    }
}
