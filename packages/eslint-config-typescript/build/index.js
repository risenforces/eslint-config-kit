"use strict";const e={js:[".js",".mjs",".jsx"],ts:[".ts",".tsx",".d.ts"],jsAndTs:[".js",".mjs",".jsx",".ts",".tsx",".d.ts"]},r={"import/no-unresolved":["error",{commonjs:!0,caseSensitive:!0}],"import/no-anonymous-default-export":["error",{allowCallExpression:!1}],"import/export":"error","import/no-extraneous-dependencies":["error",{devDependencies:["test/**","tests/**","spec/**","**/__tests__/**","**/__mocks__/**","test.{js,jsx}","test-*.{js,jsx}","**/*{.,_}{test,spec}.{js,jsx}","**/jest.config.js","**/jest.setup.js","**/vue.config.js","**/webpack.config.js","**/webpack.config.*.js","**/rollup.config.js","**/rollup.config.*.js","**/gulpfile.js","**/gulpfile.*.js","**/Gruntfile{,.js}","**/protractor.conf.js","**/protractor.conf.*.js","**/karma.conf.js"],optionalDependencies:!1}],"import/no-mutable-exports":"error","import/no-amd":"error","import/first":"error","import/no-duplicates":"error","import/extensions":["warn","ignorePackages",{js:"never",mjs:"never",jsx:"never"}],"import/newline-after-import":"warn","import/no-webpack-loader-syntax":"error","import/no-self-import":"error","import/no-cycle":["error",{maxDepth:Number.POSITIVE_INFINITY}],"import/no-useless-path-segments":["warn",{commonjs:!0}],"import/order":["warn",{groups:["builtin","external","internal","parent","sibling","index"]}]};var s={plugins:["@typescript-eslint"],parserOptions:{project:"tsconfig.json",createDefaultProgram:!0,tsconfigRootDir:"./"},settings:{"import/extensions":e.jsAndTs,"import/resolver":{node:{extensions:e.jsAndTs}},"import/ignore":["\\.(coffee|scss|css|less|hbs|svg|json)$"],"import/external-module-folders":["node_modules","node_modules/@types"],"import/parsers":{"@typescript-eslint/parser":e.ts}},rules:{"import/extensions":r["import/extensions"].slice(0,2).concat(e.jsAndTs.reduce((e,r)=>(e[r.slice(1)]="never",e),{}))},overrides:[{files:["*.ts","*.tsx"],rules:{"@typescript-eslint/adjacent-overload-signatures":"warn","@typescript-eslint/ban-ts-comment":"error","@typescript-eslint/ban-types":"error","@typescript-eslint/naming-convention":["warn",{selector:"variable",format:["camelCase","UPPER_CASE","PascalCase"],leadingUnderscore:"allow"},{selector:"parameter",format:["camelCase"],leadingUnderscore:"allow"},{selector:"typeLike",format:["PascalCase"]}],"@typescript-eslint/consistent-type-assertions":"warn","@typescript-eslint/consistent-type-definitions":["warn","interface"],"@typescript-eslint/no-array-constructor":"warn","@typescript-eslint/no-empty-interface":"warn","@typescript-eslint/no-explicit-any":"warn","@typescript-eslint/no-extra-non-null-assertion":"warn","@typescript-eslint/no-for-in-array":"warn","@typescript-eslint/no-inferrable-types":"error","@typescript-eslint/no-misused-new":"error","@typescript-eslint/no-namespace":"error","@typescript-eslint/no-non-null-assertion":"warn","@typescript-eslint/no-unused-vars":["warn",{ignoreRestSiblings:!0,varsIgnorePattern:"^_",argsIgnorePattern:"^_"}],"@typescript-eslint/no-unnecessary-condition":"warn","@typescript-eslint/no-unused-expressions":"warn","@typescript-eslint/no-useless-constructor":"warn","@typescript-eslint/prefer-for-of":"warn","@typescript-eslint/prefer-includes":"warn","@typescript-eslint/prefer-namespace-keyword":"error","@typescript-eslint/prefer-optional-chain":"warn","@typescript-eslint/prefer-string-starts-ends-with":"warn","@typescript-eslint/require-array-sort-compare":"error","@typescript-eslint/return-await":["error","in-try-catch"],"@typescript-eslint/triple-slash-reference":"error",camelcase:"off","no-array-constructor":"off","no-unused-vars":"off","no-unused-expressions":"off","no-useless-constructor":"off","no-return-await":"off","getter-return":"off","no-dupe-args":"off","no-dupe-keys":"off","no-unreachable":"off","valid-typeof":"off","no-const-assign":"off","no-new-symbol":"off","no-this-before-super":"off","no-undef":"off","no-dupe-class-members":"off","no-redeclare":"off","import/no-extraneous-dependencies":"off"}}]};module.exports=s;