import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import fs = require("fs");

export class TryToGetFilesToExportFromDestinationDirectory extends GenerateExportsProcessor {
    public static readonly Instance = new TryToGetFilesToExportFromDestinationDirectory();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        if (args.exportAllFromDestination) {

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

        if (args.exportFileNames.length < 1) {
            args.AbortPipelineWithInformationMessage("No files to export");
            return;
        }
    }

    public SafeCondition(args: GenerateExportsArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateExportsArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
