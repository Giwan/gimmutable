import AppDispatcher from 'AppDispatcher'
import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils';
import StepsConstant from 'StepsConstant'


class StepsStore extends ReduceStore {

    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.fromJS({
            "steps": [],
            "currentStep": 1
        })
    }

    reduce(state, action) {
        switch(action.type) {

            case StepsConstant.SET_STEP:
            return this.setStep(state, action.data)

            case StepsConstant.NEXT_STEP:
            return this.nextStep(state)

            default:
            return state
        }
    }

    setStep(state, step) {
        return state.update("currentStep", () => step)
    }

    nextStep(state) {
        return state.update("currentStep", step => (step < 4) ? step+1 : 0 )
    }

    getCurrentStep() {
        console.log(`current state: `, this.getState())
        return this.getState().get("currentStep")
    }
}

export default new StepsStore
