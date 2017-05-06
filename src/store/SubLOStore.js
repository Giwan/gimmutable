// import { ReduceStore } from 'flux/utils';
// import AppDispatcher from '../dispatcher/AppDispatcher';
//
// export default class SubLOStore extends ReduceStore {
//     constructor() {
//         super(AppDispatcher)
//     }
//
//     reduce(state, action) {
//         // comes in from dispatcher
//         const { type, data, } = action;
//         if (!type) console.log(`No constant type provided in store`);
//
//
//     }
//
//     getOptions() {
//         return [
//             {
//                 title: "option title"
//             }
//         ]
//         // return this.get(`options`)
//     }
// }

import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'
import assign from 'object-assign'
import SubLOConstant from 'SubLOConstant'

const CHANGE = `change`;
let options = []

function setOptions(newOptions) {
    debugger;
    options = newOptions;
}


/*
 * Broadcast changes to all who are interested
 */
function emitChange() {
  SubLOStore.emit(CHANGE);
}

/*
 * Specify event listeners and the callbacks that will be
 * invoked once those events are triggered.
 * Using the event emitter we copy functions from the
 * built-in events obect to our MessageStore object.
 */
let SubLOStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE, callback);
  },

  getOptions: () => options,
});

function handleAction(action) {
  switch(action.type) {
  case SubLOConstant.OPTIONS_RECEIVED:
    setOptions(action.data);
    emitChange();
    break;
  }
}

/*
 * Register this store with the dispatcher and
 * tell it which function to call when something happens that
 * we're intrrested in.
 */
SubLOStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = SubLOStore;
