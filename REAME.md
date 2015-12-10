# Gemplate

## Introduction
A Template project using React, ES6 (with Babel). A single style document is used for the entire project using SASS. More can be added if need be.

## NPM & Webpack
Having the right NPM packages and the corresponding webpack configuration allows for a simple project to be started quickly. The most important packages are:

1. Babel
Allows for ECMA2015 or ES6 Javascript features. Very useful to build using the new features.

2. Loaders
Various loaders are used by Webpack to ensure that the files re converted correctly for the build directory.

3. Directories
The basic webpack configuration also ensures that the files are copied to the build directory.

## Testing
Testing is part of the basic setup. Using Jest we can easily execute tests to ensure no breaking changes have been introduced.

### Jest
[Jest](https://facebook.github.io/jest/) created by Facebook as well is based on the jasmine testing engine. We don't really care apart from the fact that since it's all from FB, we hopefully don't need to worry too much about support.

#### Jest-cli
The jest-cli together with NPM allows us to run 'npm test' and kick-off the test script. If all goes well the tests should execute indicate that everything is still running as expected. Naturally this latter part will depend on the tests written. Don't forget that tests are code files, which means that they can have bugs as well...
