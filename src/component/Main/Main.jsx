import React, { Component } from 'react';
import Clicker from 'Clicker';

// Flux
import LoginAction from '../../action/LoginAction'
import LoginStore from '../../store/LoginStore'

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: LoginStore.getUser(),
      username: null,
      password: null,
      hipsterData: null,
    }

    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    LoginStore.addChangeListener(this.updateUser);
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.updateUser);
  }

  updateUser() {
    this.setState({
      user: LoginStore.getUser(),
      hipsterData: LoginStore.getData(),
    });
  }

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>

        <div className="component" >
          <div>Main component</div>

          <input
            className="rInput"
            type="text"
            placeholder="username: demo"
            onChange={(e)=> this.setState({username: e.currentTarget.value})} />

          <input
            className="rInput"
            type="text"
            placeholder="password: demo123"
            onChange={(e)=> this.setState({password: e.currentTarget.value})} />

        <div>
          <button
            className="rButton"
            onClick={this.handleLogin.bind(this)}>
            Login
          </button>
        </div>
        <div>
          <button
            className="rButton"
            onClick={()=> LoginAction.showAPI()}>
            Get Hipster text
          </button>
        </div>
        <hr />

        { this.showReceivedData() }

      </div>

      </div>
    );
  }

  handleLogin() {
    let parameters = {
      username: this.state.username,
      password: this.state.password,
    }

    LoginAction.login(parameters);
  }

  showReceivedData() {
    if (this.state.hipsterData) {
      return <div className="hipsterText">{this.state.hipsterData.text}</div>;
    }
  }
}

/*
<div>{()=> {
    if (this.state.hipsterData) return this.state.hipsterData.text; }}</div>
*/
