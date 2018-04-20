import { DefaultGeneratorsProvider } from "../../../feature/GenerateCommonFiles/DefaultGeneratorsProvider";
import { Defaults } from "../Defaults";

export class GeneratorsProvider extends DefaultGeneratorsProvider {
    public static Instance = new GeneratorsProvider();

    getPipelineGenerator() {
        return Defaults.PipelineGenerator;
    }
}