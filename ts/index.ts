import Generator = require("yeoman-generator");
import { Question, Inquirer } from "inquirer";

class PipelinesGenerator extends Generator {
    answersListener: Promise<Generator.Answers>;

    initializing() {

    }

    async prompting() {
        var pipelineNameQuestion: Question = {
            type: 'input',
            name: 'pipelineName',
            message: 'Enter a pipeline name: ',
            default: 'HelloWorld'
        };

        var processorsNameQuestion: Question = {
            type: 'input',
            name: 'processorNames',
            message: 'Enter processors names (separate them via whitespace): ',
            default: 'HelloWorld'
        };

        var questions: Generator.Question[] = [
            pipelineNameQuestion,
            processorsNameQuestion
        ];

        this.answersListener = this.prompt(questions);
    }

    configuring() {

    }

    async default() {
        var answers: Generator.Answers = await this.answersListener;
        var pipelineName: string = answers["pipelineName"];
        var processorNames: string = answers["processorNames"];
        var processorNameStrings: string[] = processorNames.split(' ');

        for (const processorName of processorNameStrings) {
            this.fs.copyTpl(
                this.templatePath('_predefinedProcessor.ts.txt'),
                this.destinationPath('./processors/' + processorName + '.ts'),
                {
                    'pipelineName': pipelineName,
                    'processorName': processorName
                },
                {});
        }

        this.fs.copyTpl(
            this.templatePath('_pipeline.ts.txt'),
            this.destinationPath(pipelineName + '.ts'),
            {
                'pipelineName': pipelineName,
                'processors': processorNameStrings
            },
            {});
    }

    writing() {
        this.log("APP");
    }
}

export = PipelinesGenerator
