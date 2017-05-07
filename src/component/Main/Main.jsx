import React, { Component } from 'react'
import Step1 from 'Step1'
import Step2 from 'Step2'
import Step3 from 'Step3'
import Step4 from 'Step4'
import Step5 from 'Step5'
import StepsAction from 'StepsAction'
import StepsStore from 'StepsStore'
import StepsIndicator from 'StepsIndicator'

// Flux

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
        "currentStep": StepsStore.getCurrentStep()
    }

    this._stepStoreUpdated = this._stepStoreUpdated.bind(this)
  }

  componentDidMount() {
      StepsStore.addListener(this._stepStoreUpdated)
  }

  componentWillUnmount() {
      StepsStore.removeListener(this._stepStoreUpdated)
  }

  _stepStoreUpdated() {
      this.setState({
          "currentStep": StepsStore.getCurrentStep()
      })
  }

  render () {
    return(
        <div>
            <StepsIndicator />
            { this.showComponentForStep(this.state.currentStep) }
            <button onClick={ StepsAction.nextStep }>Next</button>
      </div>
    )
  }

  showComponentForStep(step) {
      switch(step) {
          case 0: return <Step1 />
          case 1: return <Step2 />
          case 2: return <Step3 />
          case 3: return <Step4 />
          case 4: return <Step5 />
      }
  }
}
