export class GenerateTypescriptPathMessages {
    public static FromPathMustBeSpecified: string = "To create a path you should provide a correct root name";
    public static ToPathMustBeSpecified: string = "To create a path you should provide a correct destination name";

    public static RelativePathSet: string
        = "Passed from path [{{from}}] and to path [{{to}}] produced this relative path: [{{result}}].";

    public static AddedRelativePathFromCurrentDirectory: string
        = "To the path [{{path}}] was added a directory so it became [{{result}}].";

    public static TrimmedExtension: string
        = "From the path [{{path}}] extension was trimmed, so the result is [{{result}}].";
        
    public static ChangedSeparators: string
        = "The separators was changed to unix style, so the [{{path}}], became [{{result}}].";
}
