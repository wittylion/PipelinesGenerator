import path = require("path");
import S from "string";

export class GenerateFileModel {
    className: string;
    generatedClassName: string;
    fileName: string;
    generatedFileName: string;
    templateName: string;
    subdirectories: string[] = [];
    extension: string;

    baseGeneratedFileName(ext?: string): string {
        if (!ext) {
            if (!S(this.extension).isEmpty()) {
                return path.basename(this.generatedFileName, this.extension);
            }
            else {
                return path.basename(this.generatedFileName);
            }
        }

        return path.basename(this.generatedFileName, ext);
    }
}