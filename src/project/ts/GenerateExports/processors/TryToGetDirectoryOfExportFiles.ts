import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";
import { ObtainOptionExecutor } from "../../../../feature/ObtainOption";
import S from "string";

export class TryToGetDirectoryOfExportFiles extends GenerateExportsProcessor {
    public static readonly Instance = new TryToGetDirectoryOfExportFiles();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        let option: string
            = await ObtainOptionExecutor.obtainByKey(
                args.yeomanGenerator,
                "exportFrom"
            );

        if (!args.yeomanGenerator.fs.exists(option)) {
            args.AbortPipelineWithErrorMessage("Cann't find a folder of export files.");
            return;
        }
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition =
            args.exportAllFromDestination
            && S(args.exportFileDestination).isEmpty();
        return safeCondition;
    }
}
