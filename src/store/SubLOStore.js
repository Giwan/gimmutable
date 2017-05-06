import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'
import assign from 'object-assign'
import SubLOConstant from 'SubLOConstant'
import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils';

class SubLOStore extends ReduceStore {

    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return Immutable.fromJS({
            "options": []
        })
    }

    reduce(state, action) {
        switch(action.type) {

            case SubLOConstant.OPTIONS_RECEIVED:
            return this.setOptions(state, action.data)

            default:
            return state
        }

    }

    /**
     * Deep object needs to be set to Immutable as well before returning
     * @param {[type]} state [description]
     * @param {[type]} data  [description]
     */
    setOptions(state, data) {
        return state.update("options", ()=> Immutable.fromJS(data))
    }

    getOptions() {
        return this.getState().get(`options`).toJS();
    }
}

export default new SubLOStore
