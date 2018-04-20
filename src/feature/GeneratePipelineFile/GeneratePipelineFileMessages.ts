export class GeneratePipelineFileMessages {
    public static readonly ProcessorsAreNotAvailable = "Model with processor was not passed, it can cause to processors not created in pipeline file.";
    public static readonly FileNameIsMissing = "You have to provide file name to generate a pipeline.";
    public static readonly ClassNameIsMissing = "You have to provide class name to generate a pipeline.";
    public static readonly NoProcessorsFoundInArray = "Processors array was empty, please, pass a processor to properly create pipeline with processors, otherwise pipeline will be created without processors.";
}
