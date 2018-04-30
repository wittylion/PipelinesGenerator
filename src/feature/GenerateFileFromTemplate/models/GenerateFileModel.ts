import path = require("path");
import S from "string";

export class GenerateFileModel {
    fileName: string = "";
    templateName: string = "";
    subdirectories: string[] = [];
    subdirectoryNameTuner: (subdirectory: string) => string;
    extension: string = "";
    destinationPath: string = "";
    
    ensureSuffixInFileName: boolean = true;
    ensureSuffixInClassName: boolean = true;
    suffix: string = "";

    options: {} = {};

    getSubdirectory(): string {
        return path.join(...this.subdirectories);
    }

    getFinalPath(): string {
        return path.join(this.getSubdirectory(), this.getFinalName());
    }
    
    getFinalDestination(): any {
        return path.join(this.destinationPath, this.getFinalPath());
    }
    
    getFinalDirectoryDestination(): any {
        return path.join(this.destinationPath, this.getSubdirectory());
    }

    getFinalName(): string {
        return S(this.fileName).ensureRight(this.extension).s;
    }
}