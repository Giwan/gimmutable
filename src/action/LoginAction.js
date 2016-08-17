import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstant from '../constant/LoginConstant';
import $ from 'jquery';


let LoginAction = {
  login: (parameters)=> {
    if (parameters) {
      parameters.t = Date.now();
      $.getJSON(`http://en.acc.knowblearticles.com/login.json`, parameters, (user)=>{
        if (user && user.sessionId) LoginAction.processLogin(user);
      });
    }
  },

  processLogin: (user)=> {
    let action = {
      type: LoginConstant.LOGIN,
      user: user,
    };
    AppDispatcher.dispatch(action);
  },


  // --- avoid cross-origin issue for now

  showAPI: ()=> {
    let promise = $.getJSON(`http://hipsterjesus.com/api/`);

    promise.done((data)=>{
      LoginAction.storeData(data);
    });

    promise.fail(()=>{
      // Handle failed promise
    });

    promise.always(()=>{
      // something to do regardless of success or failure
    });
  },

  storeData: (data)=> {
    let action= {
      type: LoginConstant.STORE_DATA,
      data: data
    };
    AppDispatcher.dispatch(action);
  }
}

module.exports = LoginAction;
