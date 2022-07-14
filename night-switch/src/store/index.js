import { createStore } from 'redux';
import switchStateReducer from '../reducer/switchState';

const store = createStore(switchStateReducer);

export default store;