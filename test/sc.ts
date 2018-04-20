'use strict';
var yeoman = require('yeoman-generator');
import path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
import Generator = require('yeoman-generator');

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Testing C# pipelines with Pipelines.Net package generator.', function () {

    describe('Subgenerator: pipe:csp', function () {

        describe('When simple HelloWorld pipeline name is requested to be created in subdirectory', function () {
            let currentDir: string = "";
            
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../sc'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withPrompts({ subfolder: false })
                    .on('ready', (generator: Generator) => {
                        currentDir = path.basename(generator.destinationPath());
                    })
                    .on('end', done);
            });

            it('Generates a correct namespace for a Processor;', function () {
                assert.fileContent(
                    './App_Config/HelloWorldPipeline.config',
                    new RegExp("<processor type=\"" + currentDir + ".HelloWorld\"")
                );
            });
        });

    });

});