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
        let dir = undefined;

        if (S(option).isEmpty()) {
            return;
        }


        if (!<any> option) {
            return;
        }

        if (S(option).toBoolean() || S(option).isEmpty()) {
            dir = '.';
        }

        let result = await GenerateExportsExecutor.exportAllFromDirectory(
            args.yeomanGenerator,
            dir
        );

        let failMessages = result.messages
            .filter(
                x =>
                    x.MessageType === MessageType.Error
                    || x.MessageType === MessageType.Warning
            );

        if (failMessages.length > 0) {
            failMessages.forEach(x => args.AddMessageObject(x));
            args.AbortPipelineWithErrorMessage("Cannot create exports file.");
        }
        else {
            args.AbortPipelineWithInformationMessage("Exports file is created.");
        }
    }

    public SafeCondition(args: ProgramFlowArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: ProgramFlowArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
