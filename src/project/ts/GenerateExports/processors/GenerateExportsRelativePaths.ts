import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import path = require("path");
import S from "string";

export class GenerateExportsRelativePaths extends GenerateExportsProcessor {
    public static readonly Instance = new GenerateExportsRelativePaths();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        let destination = path.dirname(args.getFilnalName());

        args.exportRelativePaths = args.exportFileNames
            .filter(x => !S(x).isEmpty())
            .map(name => name.replace(path.extname(name), ''))
            .map(name => {
                let result = path.relative(destination, name);

                if (result.indexOf('/') === -1 && result.indexOf('\\\\') === -1) {
                    result = S(result).ensureLeft('./').s;
                }

                return result;
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
