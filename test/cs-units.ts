'use strict';
import assert = require('assert');
import { GetNamespaceFromFolderNamesExecutor, GetNamespaceFromFolderNamesArguments } from '../src/project/cs/GetNamespaceFromFolderNames';

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Unit testing C# project.', () => {
    describe('Getting namespace from a file specified', () => {
        it('Generates a namespace from a project folder path found.', async () => {
            let projectDestination = "D:\\workspace\\Test\\My.Project\\";

            let args = new GetNamespaceFromFolderNamesArguments(
                projectDestination,
                false,
                undefined,
                ["HelloWorld"]
            );
            args.projectDirectory = projectDestination;

            let res = await GetNamespaceFromFolderNamesExecutor.Instance.execute(args);
            assert.equal(
                res.result,
                "My.Project.HelloWorld",
                "Namespace must be generated from where a project directory found."
            );
        });
        
        it('Generates a namespace when all the information is specified.', async () => {
            let projectDestination = "D:\\workspace\\Test\\My.Project\\";

            let args = new GetNamespaceFromFolderNamesArguments(
                projectDestination,
                false,
                projectDestination + "HelloWorld\\Processors\\A.cs",
                ["Extra"]
            );
            args.projectDirectory = projectDestination;

            let res = await GetNamespaceFromFolderNamesExecutor.Instance.execute(args);
            assert.equal(
                res.result,
                "My.Project.Extra.HelloWorld.Processors",
                "Namespace must be generated from where a project directory found."
            );
        });
    });

    describe('Getting namespace from a test directory', () => {
        it('Generates a namespace from current directory and subdirectories.', async () => {
            let res = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                "D:\\workspace\\test",
                false,
                undefined,
                ["project"]
            );

            assert.equal(
                res.result,
                "test.project",
                "Namespace must be generated from directory and subdirectories."
            );
        });

        it('Generates a namespace to a file from current directory.', async () => {
            let res = await GetNamespaceFromFolderNamesExecutor.getNamespace(
                "D:\\workspace\\test",
                false,
                "D:\\workspace\\test\\subfolder\\arguments\\args.ts"
            );

            assert.equal(
                res.result,
                "test.subfolder.arguments",
                "Namespace must be generated from current directory and subdirectories of the arguments."
            );
        });
    });
});