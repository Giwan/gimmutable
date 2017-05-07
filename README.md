# Gimmutable

## Introduction
A Template project using Immutable, React, ES6 (with Babel).
The store is based on ReduceStore.

## Basics

### Start the server

    yarn run start-server

This starts the back-end server serving static JSON files for demo purposes.

    yarn start



## Testing
Testing is part of the basic setup. Using Jest we can easily execute tests to ensure no breaking changes have been introduced.

### Jest
[Jest](https://facebook.github.io/jest/) created by Facebook as well is based on the jasmine testing engine. We don't really care apart from the fact that since it's all from FB, we hopefully don't need to worry too much about support.

#### Jest-cli
The jest-cli together with NPM allows us to run 'npm test' and kick-off the test script. If all goes well the tests should execute indicate that everything is still running as expected. Naturally this latter part will depend on the tests written. Don't forget that tests are code files, which means that they can have bugs as well...
