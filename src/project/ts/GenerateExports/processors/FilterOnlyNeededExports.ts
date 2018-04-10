import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";
import { GenerateExportsMessages } from "../GenerateExportsMessages";
import S from "string";

export class FilterOnlyNeededExports extends GenerateExportsProcessor {
    public static readonly Instance = new FilterOnlyNeededExports();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        const fileName = args.getFilnalName();
        const file = args.yeomanGenerator.fs.read(fileName, 'utf8');

        args.exportRelativePaths =
            args.exportRelativePaths.filter(path => {
                if (file.indexOf(path) !== -1) {
                    args.AddInformation(
                        S(GenerateExportsMessages.ExportsFileAlreadyContainsThisDeclaration)
                            .template({ fileName: fileName, path: path }).s
                    );
                    return false;
                }

                if (path.endsWith("/index.ts") || path.endsWith("/index")) {
                    args.AddInformation(
                        S(GenerateExportsMessages.CannotAddIndexFileToExports)
                            .template({ path: path }).s
                    );
                    return false;
                }

                return true;
            });
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = args.filterOnlyNeededExports;
        return safeCondition;
    }
}
