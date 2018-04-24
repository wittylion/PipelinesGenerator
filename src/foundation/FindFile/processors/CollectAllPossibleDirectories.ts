import { FindFileProcessor } from "../FindFileProcessor";
import { FindFileArguments } from "../FindFileArguments";

import path = require("path");
import { IFileExistanceChecker } from "../abstractions/IFileExistanceChecker";

export class CollectAllPossibleDirectories extends FindFileProcessor {
    existanceChecker: IFileExistanceChecker;

    public static readonly Instance = new CollectAllPossibleDirectories();

    public async SafeExecute(args: FindFileArguments): Promise<void> {
        this.existanceChecker = args.existanceChecker;

        args.folders = [
            ...args.folders, 
            ...this.CollectAllDirectories(
                args.currentDir,
                args.subfolders
            )
        ];
    }

    protected CollectAllDirectories(dir: string, subdirectories: string[]): string[] {
        let result = [];
        let currentDir = dir;

        do {
            this.GetSubfoldersRecursively(currentDir, subdirectories).forEach(x => {
                result.push(x);
            });
        } while ((currentDir = this.GoUp(currentDir)));

        return result;
    }

    protected GoUp(from: string): string {
        let result = path.join(from, "..");

        if (result == from) {
            return undefined;
        }

        return result;
    }

    protected GetSubfoldersRecursively(from: string, subdirectories: string[]): string[] {
        let stack = [];
        let result = [];
        let currentDir = from;

        do {
            this.GetSubfolders(currentDir, subdirectories).forEach(x => {
                stack.push(x);
                result.push(x);
            });
        } while ((currentDir = stack.pop()));

        return result;
    }

    protected GetSubfolders(from: string, subdirectories: string[]): string[] {
        return subdirectories
            .map(dir => path.join(from, dir))
            .filter(dir => this.existanceChecker.fileExists(dir));
    }

    public SafeCondition(args: FindFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: FindFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
