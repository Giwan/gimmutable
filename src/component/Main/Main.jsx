import React, { Component } from 'react'
import Step1 from 'Step1'
import Step5 from 'Step5'
import StepsAction from 'StepsAction'
import StepsStore from 'StepsStore'
import StepsIndicator from 'StepsIndicator'

// Flux

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
        <div>
            <StepsIndicator />
            {/*
            <Step1 />
            <Step5 />
            */}

      </div>
    )
  }
}

// class StepsIndicator extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             "currentStep": StepsStore.getCurrentStep()
//         }
//     }
//
//     componentDidMount() {
//         StepsStore.addListener(this.stepStoreUpdated.bind(this))
//     }
//
//     componentWillUnmount() {
//         StepsStore.removeListener(this.stepStoreUpdated.bind(this))
//     }
//
//     stepStoreUpdated() {
//         this.setState({
//             "currentStep": StepsStore.getCurrentStep()
//         })
//     }
//     render() {
//         const steps = Array(`step`,`step`,`step`,`step`,`step`)
//         const nodes = steps.map(
//             (item, idx) => {
//                 return <button
//                         key={idx}
//                         onClick={()=> StepsAction.setStep(idx)}
//                         disabled={!!(idx === this.state.currentStep)}>
//                         Step {idx+1}
//                     </button>
//             }
//         )
//         return(
//             <div>
//                 {nodes}
//             </div>
//         )
//     }
// }
