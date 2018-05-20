import { IPipeline, IProcessor } from 'solid-pipelines'
import * as Processors from './processors'
import { DestinationEnsurer } from '../../foundation/TypeDefinitions/DestinationEnsurer';
import { FileExistanceChecker } from '../../foundation/TypeDefinitions/CheckFileExistance';
import { FileFromTemplateGenerator } from '../../foundation/TypeDefinitions/FileGenerator';
import "reflect-metadata";
import { injectable, inject } from 'inversify';
import FILES_GENERATION from '../../foundation/TypeDefinitions/ServiceIdentifiers';

@injectable()
export class GenerateFileFromTemplatePipeline implements IPipeline {

    constructor(

        @inject(FILES_GENERATION.TEMPLATE_ENSURER)
        public templateDestinationEnsurer: DestinationEnsurer,

        @inject(FILES_GENERATION.DESTINATION_ENSURER)
        public fileDestinationEnsurer: DestinationEnsurer,

        @inject(FILES_GENERATION.EXISTANCE_CHECKER)
        public fileChecker: FileExistanceChecker,

        @inject(FILES_GENERATION.FILE_GENERATOR)
        public fileFromTemplateGenerator: FileFromTemplateGenerator,
    ) {
    }

    GetProcessors(): IProcessor[] {
        return [
            ...this.BeforeFileGeneration(),
            ...this.SetOptions(),
            ...this.GenerateFileProcessors()
        ];
    }

    BeforeFileGeneration(): IProcessor[] {
        return [
            Processors.EnsureFileNameIsSet.Instance,
            new Processors.EnsureTemplateDestination(this.templateDestinationEnsurer),
            new Processors.ValidateTemplateDestination(this.fileChecker),
            Processors.EnsureSuffixInFileName.Instance,
            Processors.EnsureExtensionInFileName.Instance,
            Processors.EnsureSuffixInClassName.Instance,
            Processors.EnsureClassNameAsLeadingSubdirectory.Instance,
            Processors.AdjustCaseOfSubdirectories.Instance,
            new Processors.EnsureDestination(this.fileDestinationEnsurer),
        ];
    }

    SetOptions(): IProcessor[] {
        return [
        ];
    }

    GenerateFileProcessors(): IProcessor[] {

        return [
            Processors.FillCreationOptions.Instance,
            new Processors.CreateFileFromTemplate(this.fileFromTemplateGenerator),
            new Processors.GenerateResult(this.fileChecker),
        ];
    }
}