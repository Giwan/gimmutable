import React, { Component } from 'react';
import Clicker from '../Clicker/Clicker';

// Flux
import ClickerAction from '../../action/ClickerAction'
import ClickerStore from '../../store/ClickerStore'

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickerIsOn: ClickerStore.isClickerOn(),
    }

    this.updateClickerState = this.updateClickerState.bind(this);
  }

  componentDidMount() {
    ClickerStore.addChangeListener(this.updateClickerState);
  }

  componentWillUnmount() {
    ClickerStore.removeChangeListener(this.updateClickerState);
  }

  updateClickerState() {
    this.setState({ clickerIsOn: ClickerStore.isClickerOn() });
  }

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>

        <div className="component" >
          <div>Main component</div>
          <div>{ this.evaluateButtons() }</div>
      </div>

        <Clicker />
      </div>
    );
  }

  evaluateButtons() {
    let clickerIsOn = this.state.clickerIsOn;
    if (clickerIsOn) return (
      <button onClick={ ()=> ClickerAction.disable() } >
        disable clicker
      </button>
    );
    else return (
      <button onClick={()=> ClickerAction.enable() } >
        enable clicker
      </button>
    );
  }
}
