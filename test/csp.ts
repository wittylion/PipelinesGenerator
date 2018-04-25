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
        describe('When default', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../csp'))
                    .on('end', done);
            })

            it('Does not create files.', function () {
                assert.noFile();
            });
        });

        describe('When simple HelloWorld pipeline name is provided', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../csp'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withPrompts({ subfolder: false })
                    .on('end', done);
            });

            it('Сreates default abstract processor;', function () {
                assert.file('./HelloWorldProcessor.cs');
            });

            it('Сreates default messages class;', function () {
                assert.file('./HelloWorldMessages.cs');
            });

            it('Сreates default Hello World processor;', function () {
                assert.file('./Processors/HelloWorld.cs');
            });

            it('Сreates default Pipeline;', function () {
                assert.file('./HelloWorldPipeline.cs');
            });

            it('Сreates default Arguments;', function () {
                assert.file('HelloWorldArguments.cs');
            });
        });

        describe('When simple HelloWorld pipeline name is requested to be created in subdirectory', function () {
            let currentDir: string = "";
            
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../csp'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withPrompts({ subfolder: true })
                    .on('ready', (generator: Generator) => {
                        currentDir = path.basename(generator.destinationPath());
                    })
                    .on('end', done);
            });

            it('Сreates default abstract processor in subdirectory;', function () {
                assert.file('./HelloWorld/HelloWorldProcessor.cs');
            });

            it('Сreates default messages class in subdirectory;', function () {
                assert.file('./HelloWorld/HelloWorldMessages.cs');
            });

            it('Сreates default Hello World processor in subdirectories;', function () {
                assert.file('./HelloWorld/Processors/HelloWorld.cs');
            });

            it('Сreates default Pipeline in subdirectory;', function () {
                assert.file('./HelloWorld/HelloWorldPipeline.cs');
            });

            it('Generates a correct namespace for Pipeline;', function () {
                assert.fileContent(
                    './HelloWorld/HelloWorldPipeline.cs',
                    new RegExp("namespace " + currentDir + ".HelloWorld")
                );
            });

            it('Сreates default Arguments in subdirectory', function () {
                assert.file('./HelloWorld/HelloWorldArguments.cs');
            });
        });

        describe('When members are requested', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../csp'))
                    .withPrompts({ pipelineName: 'TestedPipeline' })
                    .withArguments(['--no-subfolder'])
                    .withOptions({'--arguments-members' : 'Hello World'})
                    .on('end', done);
            });

            it('Сreates members in arguments file', function () {
                assert.fileContent(
                    './TestedPipelineArguments.cs',
                    /public string Hello { get; set; }/
                );
                assert.fileContent(
                    './TestedPipelineArguments.cs',
                    /public string World { get; set; }/
                );
            });
        });

    });

});