import { GenerateCommonPipelineFilesPipeline } from "../../../feature/GenerateCommonFiles/GenerateCommonPipelineFilesPipeline";
import { IProcessor } from "solid-pipelines";

export class GenerateCommonFilesPipeline extends GenerateCommonPipelineFilesPipeline {
    public static Instance: GenerateCommonFilesPipeline = new GenerateCommonFilesPipeline();
}