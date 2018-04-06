import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import path = require("path");

export class GenerateExportsRelativePaths extends GenerateExportsProcessor {
    public static readonly Instance = new GenerateExportsRelativePaths();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        let destination = args.getFilnalName();

        args.exportRelativePaths = args.exportFileNames.map(name => {
            return path.relative(destination, name);
        });
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
