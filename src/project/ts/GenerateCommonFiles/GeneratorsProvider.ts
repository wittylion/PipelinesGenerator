import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";

export class GeneratorsProvider extends DefaultGeneratorsProvider {
    public static Instance = new GeneratorsProvider();

    getExecutorGenerator() {
        return Defaults.ExecutorGenerator;
    }
    
    getProcessorGenerator() {
        return Defaults.ProcessorGenerator;
    }
}