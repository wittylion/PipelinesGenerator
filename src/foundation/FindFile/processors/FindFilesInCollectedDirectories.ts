import { FindFileProcessor } from "../FindFileProcessor";
import { FindFileArguments } from "../FindFileArguments";

import path = require("path");
import fs = require("fs");

export class FindFilesInCollectedDirectories extends FindFileProcessor {
    public static readonly Instance = new FindFilesInCollectedDirectories();

    public async SafeExecute(args: FindFileArguments): Promise<void> {
        args.files = args.folders
            .map(folder => path.join(folder, args.file))
            .filter(fs.existsSync);
    }

    public SafeCondition(args: FindFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: FindFileArguments): boolean {
        let safeCondition = args.folders && args.folders.length > 0;
        return safeCondition;
    }
}
