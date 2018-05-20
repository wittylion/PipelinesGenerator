import { GenerateFileModel } from "./models/GenerateFileModel";
import { CreatedFileResult } from "./models/CreatedFileResult";

export type GenerateFileFunction = (model: GenerateFileModel) => Promise<CreatedFileResult>;
export type GenerateFile = { generate: GenerateFileFunction };
