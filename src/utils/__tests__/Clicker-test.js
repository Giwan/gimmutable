'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.dontMock('../../component/Clicker/Clicker.jsx');
const Clicker = require('../../component/Clicker/Clicker.jsx');

/*
 There's an issue with the latest babel-jest version.
 The version that works is babel-jest@^5.3.0
 */

describe('Clicker component', () => {

  it('Renders the Clicker component and checks that the text content', () => {
    var clickerComponent = TestUtils.renderIntoDocument(
      <Clicker />
    );

      // var shallowRenderer = TestUtils.createRenderer();
      // var clickerComponent = shallowRenderer.render(<Clicker />);


    expect(clickerComponent).not.toBeNull();

    var actualClicker = ReactDOM.findDOMNode(clickerComponent);
    // var actualClicker = shallowRenderer.getRenderOutput();
    expect(actualClicker.type).toBe('submit');
    expect(actualClicker).not.toBeNull();

    var actualClickerText = actualClicker.textContent;
    //
    expect(actualClickerText).toBe('0');
  });
});

/*
 * Using the shallow renderer we're able to render stateless components. * it should be possible to use statefull components with ReactDOM.
 */
