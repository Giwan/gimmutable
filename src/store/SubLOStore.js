import AppDispatcher from 'AppDispatcher'
import Immutable from 'immutable'
import SubLOConstant from 'SubLOConstant'
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

            case SubLOConstant.SAVE_FIELD:
            return this.setSubLOField(state, action.data)

            case SubLOConstant.SAVE_SUBLO:
            return this.setSubLO(state, action.data)

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
        return this.getState().get(`options`).toJS()
    }

    /**
     * For a given LO filter out the options from the array of options
     * that are related to this LO
     * @param  {Object} sublo The subLO for which we need the options
     * @return {Array}        The array of options found
     */
    getOptionsForSubLO(sublo) {
        const options = this.getState().get(`options`).toJS()
        return options.filter( item => item.sublo === sublo)
    }

    setSubLOs(state, data) {
        return state.update(`subLOs`, ()=> Immutable.fromJS(data))
    }

    setSubLOField(state, data) {
        const newSubLO = {}
        newSubLO[data.name] = data.value
        let subLOs = state.get(`subLOs`) // get immutable list
        subLOs = subLOs.push(newSubLO)
        return state.update(`subLOs`, () => subLOs)
    }

    setSubLO(state, data) {
        let subLOs = state.get(`subLOs`) // get immutable list
        subLOs = subLOs.push(data)
        return state.update(`subLOs`, () => subLOs)
    }

    getSubLOs() {
        console.log(`subLOs: `, this.getState().get(`subLOs`).toJS())
        return this.getState().get(`subLOs`).toJS();
    }
}

export default new SubLOStore
