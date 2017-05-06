import AppDispatcher from '../dispatcher/AppDispatcher'
import SubLOConstant from 'SubLOConstant'
import axios from 'axios'

const subLOAction = {
    getOptions() {
        axios.get(`http://localhost:3001/options`)
        .then( rsp => {
            subLOAction.dispatchOptions(rsp.data)
        })
        .catch( error => console.log(`error: `, error))
    },

    dispatchOptions(options) {
        AppDispatcher.dispatch({
          type: SubLOConstant.OPTIONS_RECEIVED,
          data: options
        });
    },
}

module.exports = subLOAction;
