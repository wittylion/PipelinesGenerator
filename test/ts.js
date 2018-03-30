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
        });
        
        describe('When pipeline is set', function(){
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

    });

});