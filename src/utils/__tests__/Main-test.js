'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Main = require('../../component/Main/Main.jsx');
jest.dontMock('../../component/Main/Main.jsx');
/*
 There's an issue with the latest babel-jest version.
 The version that works is babel-jest@^5.3.0
 */

// describe('Main component', () => {
//
//   it('Renders the main component and checks that the text content', () => {
//     var mainComponent = TestUtils.renderIntoDocument(
//       <Main />
//     );
//
//     var actualMainText = ReactDOM.findDOMNode(mainComponent).textContent;
//
//     expect(actualMainText).toBel('Gemplate ready!');
//   });
// });
