import yosay from "yosay"

export class GenerateProcessorFromScratchMessages {
    public static ProvideArguments = yosay("Let's try to find arguments.");
    public static ProvideAbstractProcessor = yosay("Let's try to find abstract processor.");
    public static ProvideProcessorName = "Please, provide a processor name.";

    public static CannotCreateProcessorWithoutData = "Cannot create processor with the specified data in processor model. Please review that you provided all the data.";
    public static CannotCreateProcessorWithoutProcessorGenerator = "Cannot create processor without a processor creator. Please review that you provided a processor creator.";
}
