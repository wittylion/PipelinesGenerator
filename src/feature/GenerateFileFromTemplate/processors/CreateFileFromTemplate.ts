import { GenerateFileFromTemplateProcessor } from "../GenerateFileFromTemplateProcessor";
import { GenerateFileFromTemplateArguments } from "../GenerateFileFromTemplateArguments";
import S from "string";
import { FileFromTemplateGenerator } from "../../../foundation/TypeDefinitions/FileGenerator";

export class CreateFileFromTemplate extends GenerateFileFromTemplateProcessor {

    constructor(public fileGenerator: FileFromTemplateGenerator) {
        super();
    }

    public async SafeExecute(args: GenerateFileFromTemplateArguments): Promise<void> {
        await this.fileGenerator.generate(
            args.templateDestination,
            args.destination,
            args.creationOptions
        );
    }

    public SafeCondition(args: GenerateFileFromTemplateArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateFileFromTemplateArguments): boolean {
        let safeCondition = !S(args.destination).isEmpty() && !S(args.templateDestination).isEmpty();
        return safeCondition;
    }
}
