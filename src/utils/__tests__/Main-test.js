'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.dontMock('../../component/Main/Main.jsx');
const Main = require('../../component/Main/Main.jsx');

/*
 There's an issue with the latest babel-jest version.
 The version that works is babel-jest@^5.3.0
 */

describe('Main component', () => {

  it('Renders the main component and checks that the text content', () => {
    // var mainComponent = TestUtils.renderIntoDocument(
    //   <div><Main /></div></div>
    // );

      var shallowRenderer = TestUtils.createRenderer();
      var mainComponent = shallowRenderer.render(<Main />);


    expect(mainComponent).not.toBeNull();

    // var actualMain = ReactDOM.findDOMNode(mainComponent);
    var actualMain = shallowRenderer.getRenderOutput();
    expect(actualMain.type).toBe('div');
    expect(actualMain).not.toBeNull();

    var actualMainText = actualMain.props.children;

    expect(actualMainText).toBe('hello');
  });
});

/*
 * Using the shallow renderer we're able to render stateless components. * it should be possible to use statefull components with ReactDOM.
 */
