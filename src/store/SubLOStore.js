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
            "options": [{
                title: `test`
            }]
        })
    }

    reduce(state, action) {
        debugger;
        // const { type, data, } = action;
        switch(action.type) {
            case SubLOConstant.OPTIONS_RECEIVED_OLD:
            return (
                {
                    "options": [{
                        title: `updated`
                    }]
                }
            )

            case SubLOConstant.OPTIONS_RECEIVED:
            return this.setOptions(state, action.data)

            default:
            return state
        }

    }

    setOptions(state, data) {
        debugger;
        return state.update("options", ()=> Immutable.fromJS(data))
    }

    getOptions() {
        debugger;
        return this.getState().get(`options`).toJS();
    }
}

export default new SubLOStore

// const CHANGE = `change`;
// let options = Immutable.fromJS([]);
//
// function setOptions(newOptions) {
//     debugger;
//     options = options.merge(newOptions)
// }
//
//
// /*
//  * Broadcast changes to all who are interested
//  */
// function emitChange() {
//   SubLOStore.emit(CHANGE);
// }
//
// /*
//  * Specify event listeners and the callbacks that will be
//  * invoked once those events are triggered.
//  * Using the event emitter we copy functions from the
//  * built-in events obect to our MessageStore object.
//  */
// let SubLOStore = assign({}, EventEmitter.prototype, {
//   addChangeListener: function (callback) {
//     this.on(CHANGE, callback);
//   },
//
//   removeChangeListener: function (callback) {
//     this.removeListener(CHANGE, callback);
//   },
//
//   getOptions: () => {
//       return options.toJS()
//   },
// });
//
// function handleAction(action) {
//   switch(action.type) {
//   case SubLOConstant.OPTIONS_RECEIVED:
//     setOptions(action.data);
//     emitChange();
//     break;
//   }
// }
//
// /*
//  * Register this store with the dispatcher and
//  * tell it which function to call when something happens that
//  * we're intrrested in.
//  */
// SubLOStore.dispatchToken = AppDispatcher.register(handleAction);
// module.exports = SubLOStore;
