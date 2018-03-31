import Generator = require("yeoman-generator");

class PipelinesGenerator extends Generator {
    default() {
        this.fs.copyTpl(
            this.templatePath('_pipelineExecutor.ts.ejs'),
            this.destinationPath('a.js'),
            {
            },
            {});
    }
}

export = PipelinesGenerator
