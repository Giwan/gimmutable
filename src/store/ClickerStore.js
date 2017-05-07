import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import ClickerConstant from '../constant/ClickerConstant';

let clickerIsOn = true;
const CHANGE = 'change';

function updateClickerState(receivedState) {
  clickerIsOn = receivedState;
}


/*
 * Broadcast changes to all who are interested
 */
function emitChange() {
  ClickerStore.emit(CHANGE);
}

/*
 * Specify event listeners and the callbacks that will be
 * invoked once those events are triggered.
 * Using the event emitter we copy functions from the
 * built-in events obect to our MessageStore object.
 */
let ClickerStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE, callback);
  },

  isClickerOn: () => clickerIsOn,
});

function handleAction(action) {
  switch(action.type) {
    case ClickerConstant.ENABLE_CLICKER:
      updateClickerState(true);
      emitChange();
      break;
    case ClickerConstant.DISABLE_CLICKER:
      updateClickerState(false);
      emitChange();
      break;
  }
}

/*
 * Register this store with the dispatcher and
 * tell it which function to call when something happens that
 * we're intrrested in.
 */
ClickerStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = ClickerStore;
