'use strict';
import assert = require('assert');
import { GetNamespaceFromFolderNamesExecutor } from '../src/project/cs/GetNamespaceFromFolderNames';

/*
 * Test for all subgenerators NOT requiring a name argument
 */
describe('Unit testing C# project.', () => {
    describe('Getting namespace from folder names', () => {
        it('Generates a namespace from current directory and subdirectories.', async () => {
            let res = await GetNamespaceFromFolderNamesExecutor.getNamespace("D:\\workspace\\test", false, undefined, ["project"]);

            assert.equal(res.result, "test.project", "Namespace must be generated from directory and subdirectories.");
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