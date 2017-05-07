import React, { Component } from 'react';

// Flux
import ClickerStore from '../../store/ClickerStore'

export default class Clicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isClickerOn: ClickerStore.isClickerOn(),
    };

    // aah I keep forgetting this
    this.updateClickerState = this.updateClickerState.bind(this);
  }

  componentDidMount() {
    ClickerStore.addChangeListener(this.updateClickerState);
  }

  componentWillUnmount() {
    ClickerStore.removeChangeListener(this.updateClickerState);
  }

  updateClickerState() {
    this.setState({ isClickerOn: ClickerStore.isClickerOn() });
  }

  render () {
    if (this.state.isClickerOn) {
      return(
        <div className="component">
          <div>Clicker component</div>
        <button className="btnClicker" onClick={this.onClickerClick.bind(this)}>
          {this.state.counter}
        </button>
      </div>
      );
    }

    return <div>Clicker is off</div>;
  }

  onClickerClick() {
    let i = this.state.counter;
    i++;
    this.setState({counter: i});
  }
}
