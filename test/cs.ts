'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Testing C# pipelines generator.', function () {

    describe('Subgenerator: pipe:cs', function () {
        describe('When default', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../cs'))
                    .on('end', done);
            })

            it('Does not create files.', function () {
                assert.noFile();
            });
        });

        describe('When simple HelloWorld pipeline name is provided', function () {
            before(function (done) {
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../cs'))
                    .withPrompts({ pipelineName: 'HelloWorld' })
                    .withPrompts({ processorNames: 'HelloWorld' })
                    .withPrompts({ subfolder: 'n' })
                    .on('end', done);
            });

            it('Сreates default abstract processor', function () {
                assert.file('./HelloWorldProcessor.cs');
            });

            it('Сreates default Hello World processor', function () {
                assert.file('./Processors/HelloWorld.cs');
            });

            it('Сreates default Pipeline', function () {
                assert.file('./HelloWorldPipeline.cs');
            });

            it('Сreates default Arguments', function () {
                assert.file('HelloWorldArguments.cs');
            });
        });

    });

});