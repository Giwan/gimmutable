import AppDispatcher from '../dispatcher/AppDispatcher'
import SubLOConstant from 'SubLOConstant'
import axios from 'axios'

const domain = `http://localhost:3001`
const subLOAction = {
    getOptions() {
        axios.get(`${domain}/options`)
        .then( rsp => AppDispatcher.dispatch({
          type: SubLOConstant.OPTIONS_RECEIVED,
          data: rsp.data
        }))
        .catch( error => console.log(`error: `, error))
    },

    getSubLOs() {
        axios.get(`${domain}/sublos`)
        .then( rsp => AppDispatcher.dispatch({
          type: SubLOConstant.SUBLOS_RECEIVED,
          data: rsp.data
        }))
        .catch( error => console.log(`error: `, error))
    }
}

module.exports = subLOAction;
