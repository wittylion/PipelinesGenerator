import path = require("path");
import S from "string";

export class GenerateFileModel {
    className: string;
    fileName: string;
    templateName: string;
    subdirectories: string[] = [];
    subdirectoryNameTuner: (subdirectory: string) => string;
    extension: string;
    
    ensureSuffixInFileName: boolean = true;
    ensureSuffixInClassName: boolean = true;

    suffix: string;

    getSubdirectory(): string {
        return path.join(...this.subdirectories);
    }

    getFinalPath(): string {
        return path.join(this.getSubdirectory(), this.fileName);
    }
}