'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Testing typescript pipelines generator.', function () {

    describe('Subgenerator: pipe:ts', function () {
        describe('When default', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .on('end', done);
            })

            it('Does not create a file.', function () {
                assert.noFile();
            });
        });

        describe('When simple Hello World pipeline is created by providing answers', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withPrompts({ subfolder: 'n' })
                    .on('end', done);
            });

            it('Сreates default Hello World files', function () {
                assert.file([
                    'HelloWorldProcessor.ts',
                    './processors/HelloWorld.ts']);
            });

            it('Сreates default Pipeline', function () {
                assert.file('./HelloWorldPipeline.ts');
            });

            it('Сreates default Arguments', function () {
                assert.file('HelloWorldArguments.ts');
            });

            it('Сreates processors exports file', function () {
                assert.file('./processors/index.ts');
            });

            it('Adds export Hello World definition to processors export', function () {
                assert.fileContent(
                    './processors/index.ts',
                    /export \* from '\.\/HelloWorld'/
                );
            });

            it('Сreates executor file', function () {
                assert.file('./HelloWorldExecutor.ts');
            });

            it('Сreates export file with pipeline items', function () {
                assert.file('./HelloWorldExecutor.ts');
            });

            it('Adds export of executor to file with pipeline items', function () {
                assert.fileContent(
                    './index.ts',
                    /export \* from '\.\/HelloWorldExecutor'/
                );
            });

            it('Adds export of arguments to file with pipeline items', function () {
                assert.fileContent(
                    './index.ts',
                    /export \* from '\.\/HelloWorldArguments'/
                );
            });

            it('Creates a proper name in the pipeline file', function () {
                assert.fileContent(
                    './HelloWorldPipeline.ts',
                    /class HelloWorldPipeline /
                );
            });

            it('Creates an import statement in default processor to bring the abstract processor', function () {
                assert.fileContent(
                    './processors/HelloWorld.ts',
                    /import { HelloWorldProcessor } from ('|\")\.\.\/HelloWorldProcessor('|\")/
                );
            });

            it('Creates an import statement in default processor to bring the arguments', function () {
                assert.fileContent(
                    './processors/HelloWorld.ts',
                    /import { HelloWorldArguments } from ('|\")\.\.\/HelloWorldArguments('|\")/
                );
            });

            it('Creates an import statement in executor to bring the arguments', function () {
                assert.fileContent(
                    './HelloWorldExecutor.ts',
                    /import { HelloWorldArguments } from ('|\")\.\/HelloWorldArguments('|\")/
                );
            });

            it('Creates an import statement in executor to bring the pipeline', function () {
                assert.fileContent(
                    './HelloWorldExecutor.ts',
                    /import { HelloWorldPipeline } from ('|\")\.\/HelloWorldPipeline('|\")/
                );
            });
        });

        describe('When subdirectory is requested for simple Hello World processor', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withOptions({ '--subfolder': 'true' })
                    .on('end', done);
            });

            it('Creates executor in the subfolder', function () {
                assert.file('./HelloWorld/HelloWorldExecutor.ts');
            });

            it('Creates pipeline in the subfolder', function () {
                assert.file('./HelloWorld/HelloWorldPipeline.ts');
            });

            it('Creates arguments in the subfolder', function () {
                assert.file('./HelloWorld/HelloWorldArguments.ts');
            });

            it('Creates processors in the subfolder', function () {
                assert.file('./HelloWorld/processors/HelloWorld.ts');
            });
        });

        describe('When only pipeline is set', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'TestedSome' })
                    .withArguments(['--no-subfolder'])
                    .on('end', done);
            });

            it('Сreates file with pipeline name', function () {
                assert.file(['TestedSomePipeline.ts']);
            });
        });

        describe('When pipeline with "Pipeline" suffix is set', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'TestedPipeline' })
                    .withArguments(['--no-subfolder'])
                    .on('end', done);
            });

            it('Сreates file without doubled "Pipeline" word', function () {
                assert.file(['TestedPipeline.ts']);
            });

            it('Сreates class without doubled "Pipeline" word', function () {
                assert.fileContent(
                    './TestedPipeline.ts',
                    /class TestedPipeline /
                );
            });
        });

        describe('When processors are set', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'TestedPipeline' })
                    .withPrompts({ processorNames: 'A B' })
                    .withArguments(['--no-subfolder'])
                    .on('end', done);
            });

            it('Сreates files with passed processor names', function () {
                assert.file([
                    './processors/A.ts',
                    './processors/B.ts'
                ]);
            });
        });

    });

});