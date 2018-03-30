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
        describe('When default', function(){
            before(function(done){
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .on('end', done);
            });
            
            it('Сreates default Hello World files', function(){
                assert.file([
                    'HelloWorldPipeline.ts', 
                    'HelloWorldArguments.ts', 
                    'HelloWorldProcessor.ts', 
                    './processors/HelloWorld.ts']);
            });

            it('Сreates processors exports file', function(){
                assert.file('./processors/index.ts');
            });

            it('Adds export Hello World definition to processors export', function(){
                assert.fileContent(
                    './processors/index.ts',
                    /export \* from '\.\/HelloWorld'/
                );
            });

            it('Сreates executor file', function(){
                assert.file('./HelloWorldExecutor.ts');
            });

            it('Сreates export file with pipeline items', function(){
                assert.file('./HelloWorldExecutor.ts');
            });

            it('Adds export of executor to file with pipeline items', function(){
                assert.fileContent(
                    './index.ts',
                    /export \* from '\.\/HelloWorldExecutor'/
                );
            });

            it('Adds export of arguments to file with pipeline items', function(){
                assert.fileContent(
                    './index.ts',
                    /export \* from '\.\/HelloWorldArguments'/
                );
            });

            it('Creates a proper name in the pipeline file', function(){
                assert.fileContent(
                    './HelloWorldPipeline.ts',
                    /class HelloWorldPipeline /
                );
            });
        });
        
        describe('When only pipeline is set', function(){
            before(function(done){
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'TestedPipeline' })
                    .on('end', done);
            });
            
            it('Сreates file with pipeline name', function(){
                assert.file(['TestedPipeline.ts']);
            });
        });

        describe('When processors are set', function(){
            before(function(done){
                // The object returned acts like a promise, so return it to wait until the process is done
                helpers.run(path.join(__dirname, '../ts'))
                    .withPrompts({ pipelineName: 'TestedPipeline' })
                    .withPrompts({ processorNames: 'A B' })
                    .on('end', done);
            });
            
            it('Сreates files with passed processor names', function(){
                assert.file([
                    './processors/A.ts',
                    './processors/B.ts'
                ]);
            });
        });

    });

});