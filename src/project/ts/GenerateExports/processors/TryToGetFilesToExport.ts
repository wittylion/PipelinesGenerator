import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import fs = require("fs");

export class TryToGetFilesToExport extends GenerateExportsProcessor {
    public static readonly Instance = new TryToGetFilesToExport();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        if (args.exportAllFromDestination) {

            if (!fs.existsSync(args.exportFileDestination)) {
                args.AbortPipelineWithWarningMessage("No directory found.");
                return;
            }

            fs.readdirSync(args.exportFileDestination).forEach(dir => {
                if (args.exportFileNames.indexOf(dir) === -1) {
                    args.exportFileNames.push(dir);
                }
            });
        }
        else {
            if (args.exportFileNames.length < 1) {
                args.AbortPipelineWithInformationMessage("No files to export");
                return;
            }
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
