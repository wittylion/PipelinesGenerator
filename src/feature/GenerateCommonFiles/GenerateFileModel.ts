import path = require("path");
import S from "string";

export class GenerateFileModel {
    className: string;
    fileName: string;
    templateName: string;
    subdirectories: string[] = [];
    extension: string;
}