import React, {Component} from 'react';

export default class Clicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render () {
    return(
      <button onClick={this.onClickerClick.bind(this)}>
        {this.state.counter}
      </button>
    );
  }

  onClickerClick() {
    let i = this.state.counter;
    i++;
    this.setState({counter: i});
  }
}
