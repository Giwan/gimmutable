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
            "subLOs": [],
            "options": []
        })
    }

    reduce(state, action) {
        switch(action.type) {

            case SubLOConstant.OPTIONS_RECEIVED:
            return this.setOptions(state, action.data)

            case SubLOConstant.SUBLOS_RECEIVED:
            return this.setSubLOs(state, action.data)

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
        // const subLOs = state.get(`subLOs`).toJS()
        // const currentSubLO = subLOs.find( item => item.uuid === data.sublo)
        return state.update("options", ()=> Immutable.fromJS(data))
    }

    getOptions() {
        return this.getState().get(`options`).toJS()
    }

    getOptionsForSubLO(sublo) {
        const options = this.getState().get(`options`).toJS()
        debugger
        return options.filter( item => item.sublo === sublo)
    }

    setSubLOs(state, data) {
        return state.update(`subLOs`, ()=> Immutable.fromJS(data))
    }

    getSubLOs() {
        return this.getState().get(`subLOs`).toJS();
    }
}

export default new SubLOStore
