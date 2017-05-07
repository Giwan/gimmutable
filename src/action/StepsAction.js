import AppDispatcher from 'AppDispatcher'
import StepsConstant from 'StepsConstant'

const domain = `http://localhost:3001`
const stepsAction = {
    setStep(step) {
        AppDispatcher.dispatch({
          type: StepsConstant.SET_STEP,
          data: step
        })
    },

    nextStep() {
        AppDispatcher.dispatch({
          type: StepsConstant.NEXT_STEP,
          data: null
        })
    }
}

module.exports = stepsAction;
