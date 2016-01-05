import React, {Component} from 'react';
import Clicker from '../Clicker/Clicker';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <h1>hello</h1>
        <Clicker />
      </div>
    );
  }
}
