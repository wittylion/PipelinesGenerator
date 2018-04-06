import path = require('path');
import S from "string";
import { GenerateCommonPipelineFilesProcessor } from "../../../../feature/GenerateCommonFiles/GenerateCommonPipelineFilesProcessor";
import { GenerateCommonPipelineFilesArguments } from "../../../../feature/GenerateCommonFiles";
import { GenerateFileFromTemplateArguments, GenerateFileFromTemplateExecutor } from "../../../../feature/GenerateFileFromTemplate";
import { Defaults } from '../../Defaults';
import _ from 'lodash';
import { GenerateExportsExecutor } from '../../GenerateExports';

export class GenerateProcessorsExports extends GenerateCommonPipelineFilesProcessor {
    public static readonly Instance = new GenerateProcessorsExports();

    public async SafeExecute(args: GenerateCommonPipelineFilesArguments): Promise<void> {
        await GenerateExportsExecutor.exportAllFiles(
            args.yeomanGenerator,
            ...args.processorsFileNames
        );
    }

    public SafeCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        return super.SafeCondition(args) && this.CustomCondition(args);
    }

    public CustomCondition(args: GenerateCommonPipelineFilesArguments): boolean {
        let safeCondition = args.processorsNames.filter(x => !S(x).isEmpty()).length > 0;
        return safeCondition;
    }
}
