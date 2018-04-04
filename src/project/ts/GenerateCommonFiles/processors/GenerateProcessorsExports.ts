import path = require('path');
import S from "string";
import { GenerateCommonPipelineFilesProcessor } from "../../../../feature/GenerateCommonFiles/GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../../../../feature/GenerateCommonFiles";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../../../feature/GenerateFileFromTemplate";
import { Defaults } from '../../Defaults';
import _ from 'lodash';

export class GenerateProcessorsExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessorsExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        let model = _.clone(Defaults.processorsExportsModel);

        if (!model) {
            args.AbortPipelineWithErrorMessage("Cannot find model for the file, exporting processors.");
            return;
        }

        model.subdirectories = [...args.commonSubfolders, ...model.subdirectories, 'processors'];
        let processorsExportsGeneration = new GenerateFileFromTemplateArguments();

        processorsExportsGeneration.fileModel = model;
        processorsExportsGeneration.creationOptions['exportFileNames'] =
            args.processorsNames.map(x => path.basename(x, '.ts'));
        processorsExportsGeneration.yeomanGenerator = args.yeomanGenerator;
        processorsExportsGeneration.subdirectoryCaseTuner = args.commonSubdirectoryCaseTuner;

        await GenerateFileFromTemplateExecutor.Instance.execute(processorsExportsGeneration);
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.filter(x => !S(x).isEmpty()).length > 0;
        return safeCondition;
    }
}
