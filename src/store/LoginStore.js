import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import LoginConstant from '../constant/LoginConstant';

const CHANGE = 'change';

let user = {};
let data = null;

function updateUser(newUser) {
  user = newUser;
}

function storeData(newData) {
  data = newData;
}

/*
 * Broadcast changes to all who are interested
 */
function emitChange() {
  LoginStore.emit(CHANGE);
}

/*
 * Specify event listeners and the callbacks that will be
 * invoked once those events are triggered.
 * Using the event emitter we copy functions from the
 * built-in events obect to our MessageStore object.
 */
let LoginStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE, callback);
  },

  hasValidUser: () => !!(user && user.sessionId),
  getUser: ()=> user,
  getData: ()=> data,
});

function handleAction(action) {
  switch(action.type) {
    case LoginConstant.LOGIN:
      updateUser(action.user);
      emitChange();
      break;
    case LoginConstant.STORE_DATA:
      storeData(action.data);
      emitChange();
  }
}

/*
 * Register this store with the dispatcher and
 * tell it which function to call when something happens that
 * we're intrrested in.
 */
LoginStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = LoginStore;
