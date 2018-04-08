import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import fs = require("fs");

export class TryToGetFilesToExportFromDestinationDirectory extends GenerateExportsProcessor {
    public static readonly Instance = new TryToGetFilesToExportFromDestinationDirectory();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        if (!fs.existsSync(args.exportFileDestination)) {
            args.AddWarning(`You passed an option to export everything from a directory, but the [${args.exportFileDestination}] directory was not found.`);
        }
        else {
            fs.readdirSync(args.exportFileDestination).forEach(dir => {
                if (args.exportFileNames.indexOf(dir) === -1) {
                    args.exportFileNames.push(dir);
                }
            });
        }
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = args.exportAllFromDestination;
        return safeCondition;
    }
}
