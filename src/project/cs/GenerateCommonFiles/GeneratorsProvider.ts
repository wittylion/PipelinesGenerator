import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";

export class GeneratorsProvider extends DefaultGeneratorsProvider {
    public static Instance = new GeneratorsProvider();

    getFileFromTemplateGenerator(){
        return Defaults.FileFromTemplateGenerator;
    }

    getPipelineGenerator() {
        return Defaults.PipelineGenerator;
    }

    getProcessorGenerator() {
        return Defaults.ProcessorGenerator;
    }
}