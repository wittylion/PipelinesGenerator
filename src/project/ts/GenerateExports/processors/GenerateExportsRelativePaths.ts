import { GenerateExportsProcessor } from "../GenerateExportsProcessor";
import { GenerateExportsArguments } from "../GenerateExportsArguments";

import path = require("path");
import S from "string";
import { GenerateExportsMessages } from "../GenerateExportsMessages";

export class GenerateExportsRelativePaths extends GenerateExportsProcessor {
    public static readonly Instance = new GenerateExportsRelativePaths();

    public async SafeExecute(args: GenerateExportsArguments): Promise<void> {
        let destination = path.dirname(args.getFilnalName());

        args.exportRelativePaths = args.exportFileNames
            .filter((val, index) => {
                if (S(val).isEmpty()) {
                    args.AddInformation(
                        S(GenerateExportsMessages.TheFileOnIndexContainedNoValue)
                            .template({ index: index }).s
                    );
                    return false;
                }

                return true;
            })
            .map(name => name.replace(path.extname(name), ''))
            .map(name => {
                let result = path.relative(destination, name);

                if (result.indexOf('/') === -1 && result.indexOf('\\') === -1) {
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
