export class ResolveFileDependencyMessages {
    public static PatternToFindIsEmpty = "The pattern you've passed to find is empty.";

    public static ConfirmFile = "We have found [{{file}}] file to use, please confirm whether it should be used.";
    public static ChooseFile = "We have found these files to use, please choose one of them to be used.";
    public static TypeFilePath = "Please provide a relative path to a file from this directory [{{directory}}].";

    public static UserConfirmed = "We suggested user to use [{{file}}] and he approved this suggestion.";
    public static UserSelected = "We suggested user to select one of these [{{options}}] options and user selected [{{file}}] to use.";
    public static UserTypedFilePath = "User provided this path to a file [{{path}}].";

    public static ShouldCreateFile = "We found that the path [{{path}}] doesn't exist, would you like to create this file.";
    
    public static FileWillNotBeCreated = "User declined a guess of [{{path}}]";
}
