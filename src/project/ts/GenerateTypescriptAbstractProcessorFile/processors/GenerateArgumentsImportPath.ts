import S from "string";
import { GenerateAbstractProcessorFileProcessor } from "../../../../feature/GenerateAbstractProcessorFile/GenerateAbstractProcessorFileProcessor";
import { GenerateAbstractProcessorFileArguments } from "../../../../feature/GenerateAbstractProcessorFile/GenerateAbstractProcessorFileArguments";
import { GenerateTypescriptPathExecutor } from "../../GenerateTypescriptPath/GenerateTypescriptPathExecutor";

export class GenerateArgumentsImportPath extends GenerateAbstractProcessorFileProcessor {
    public static readonly Instance = new GenerateArgumentsImportPath();

    public async SafeExecute(args: GenerateAbstractProcessorFileArguments): Promise<void> {

        let importPath = await GenerateTypescriptPathExecutor.Instance.getPath(
            args.yeomanGenerator.destinationPath(
                args.fileModel.getSubdirectory()),
                args.argumentsFileName
            );

        args.AddMessageObjects(importPath.messages);

        args.argumentsImportPath = importPath.result;
    }

    public SafeCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateAbstractProcessorFileArguments): boolean {
        let safeCondition = true;
        return safeCondition;
    }
}
