import { GetNamespaceFromFolderNamesProcessor } from "../GetNamespaceFromFolderNamesProcessor";
import { GetNamespaceFromFolderNamesArguments } from "../GetNamespaceFromFolderNamesArguments";

import path = require("upath");
import S from "string";
import { FindFileExecutor, FindFileArguments } from "../../../../foundation/FindFile";
import "reflect-metadata";
import { injectable, inject } from "inversify";
import FIND_FILE from "../../../../foundation/FindFile/ServiceIdentifiers";
import { PipelineExecutor } from "solid-pipelines";

@injectable()
export class TryFindProjectFile extends GetNamespaceFromFolderNamesProcessor {

    constructor(

        @inject(FIND_FILE.EXECUTOR)
        public findFile: PipelineExecutor

    ) {
        super();

    }

    public async SafeExecute(args: GetNamespaceFromFolderNamesArguments): Promise<void> {
        let findFileArgs = new FindFileArguments(
            args.destinationPath,
            "packages.config"
        );

        await this.findFile.Execute(findFileArgs);

        if (findFileArgs.files.length > 0) {
            args.projectDirectory = path.dirname(findFileArgs.files[0]);
        }
    }

    public SafeCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GetNamespaceFromFolderNamesArguments): boolean {
        let safeCondition = S(args.projectDirectory).isEmpty() && args.shouldFindProjectDirectory;
        return safeCondition;
    }
}
