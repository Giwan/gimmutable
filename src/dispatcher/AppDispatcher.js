/**
Dispatcher handles message routing from action to store.
Importantly, it can wait for one store to finish updating
before dispatching another action. 
*/

import { Dispatcher } from 'flux';
module.exports = new Dispatcher();
