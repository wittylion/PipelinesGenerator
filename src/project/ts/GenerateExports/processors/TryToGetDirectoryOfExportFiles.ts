import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";
import { ObtainOptionExecutor } from "../../../../feature/ObtainOption";
import S from "string";
import { GenerateExportsOptionNames } from "../GenerateExportsOptionNames";

export class TryToGetDirectoryOfExportFiles extends GenerateExportsProcessor {
    public static readonly Instance = new TryToGetDirectoryOfExportFiles();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        let option: string
            = await ObtainOptionExecutor.obtainByKey(
                args.yeomanGenerator,
                GenerateExportsOptionNames.EXPORT_DIRECTORY
            );

        if (!<any> option) {
            return;
        }

        if (S(option).toBoolean() || S(option).isEmpty()) {
            args.exportFileDestination = '.';
            return;
        }

        if (!args.yeomanGenerator.fs.exists(option)) {
            args.AbortPipelineWithErrorMessage("Can't find a folder of export files.");
            return;
        }

        args.exportFileDestination = option;
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition =
            S(args.exportFileDestination).isEmpty();
        return safeCondition;
    }
}
