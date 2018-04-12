export class GenerateProcessorFileMessages {
    public static FileNameIsMissing 
        = "Cannot create a processor file, because file name is missing.";
    public static ClassNameIsMissing 
        = "Cannot create a processor file, because class name is missing.";

    public static ArgumentsMustBeProvided
        = "You have to provide arguments reference for a complete file creation. Processor file will be created, but without arguments file and class references.";
    public static ArgumentsClassNameIsMissing
        = "Cannot create a processor [{{processor}}] in file [{{file}}], because argumemts class name, needed for a template is missing.";
    public static ArgumentsFileNameIsMissing
        = "Cannot create a processor [{{processor}}] in file [{{file}}], because argumemts file name, needed for a template is missing.";
    
    public static AbstractProcessorMustBeProvided
        = "You have to provide abstract processor reference for a complete file creation. Processor file will be created, but without references to file and class of abstract processor.";
    public static AbstractProcessorFileNameIsMissing
        = "Cannot create a processor [{{processor}}] in file [{{file}}], because abstract processor file name, needed for a template is missing.";
    public static AbstractProcessorClassNameIsMissing
        = "Cannot create a processor [{{processor}}] in file [{{file}}], because abstract processor class name, needed for a template is missing.";
}
