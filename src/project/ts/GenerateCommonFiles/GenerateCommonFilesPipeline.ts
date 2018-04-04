import { GenerateCommonPipelineFilesPipeline } from "../../../feature/GenerateCommonFiles/GenerateCommonPipelineFilesPipeline";
import { IProcessor } from "solid-pipelines";
import * as Processors from './processors'

export class GenerateCommonFilesPipeline extends GenerateCommonPipelineFilesPipeline {
    public static Instance: GenerateCommonFilesPipeline = new GenerateCommonFilesPipeline();

    GetExtraGeneratorProcessors(): IProcessor[] {
        return [
            Processors.GenerateProcessorsExports.Instance,
            Processors.GenerateMainExports.Instance
        ];
    }
}