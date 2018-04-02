import path = require("path");

export class GenerateFileModel {
    className: string;
    generatedClassName: string;
    fileName: string;
    generatedFileName: string;
    templateName: string;
    subdirectories: string[] = [];
    extension: string;

    baseGeneratedFileName(ext?: string): string {
        return path.basename(this.generatedFileName, ext);
    }
}