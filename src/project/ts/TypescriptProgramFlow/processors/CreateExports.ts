import { ProgramFlowProcessor } from "../../../../feature/ProgramFlow/ProgramFlowProcessor";
import { ProgramFlowArguments } from "../../../../feature/ProgramFlow/ProgramFlowArguments";
import { GenerateExportsExecutor } from "../../GenerateExports";
import { ObtainOptionExecutor } from "../../../../feature/ObtainOption";
import { GenerateExportsOptionNames } from "../../GenerateExports/GenerateExportsOptionNames";
import S from "string";
import { MessageType } from "solid-pipelines";

export class CreateExports extends ProgramFlowProcessor {
    public static readonly Instance = new CreateExports();

    public async SafeExecute(args: ProgramFlowArguments): Promise<void> {
        let option = await ObtainOptionExecutor.obtainByKey(
            args.yeomanGenerator,
            GenerateExportsOptionNames.EXPORT_DIRECTORY
        );
        let dir = option;

        if (S(dir).isEmpty()) {
            return;
        }


        if (!<any> option) {
            return;
        }

        if (S(option).toBoolean() || S(option).isEmpty()) {
            dir = '.';
        }

        await GenerateExportsExecutor.exportAllFromDirectory(
            args.yeomanGenerator,
            dir
        );
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
