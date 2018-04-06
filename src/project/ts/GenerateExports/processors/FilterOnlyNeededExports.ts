import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

export class FilterOnlyNeededExports extends GenerateExportsProcessor {
    public static readonly Instance = new FilterOnlyNeededExports();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        const file = args.yeomanGenerator.fs.read(args.getFilnalName(), 'utf8');

        args.exportRelativePaths = 
            args.exportRelativePaths.filter(path => {
                return file.indexOf(path) === -1
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
