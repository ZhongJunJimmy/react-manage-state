import { createStore, applyMiddleware } from 'redux';
import switchStateReducer from '../reducer/switchState';

const getData = (store) => (next) => (action) => {

    const URL = 'http://localhost:3001/posts';
    console.log(URL)
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            next(action);
        })
        .catch(err => {
            console.log(`err: ${err}`);
            next(action);
        });

}

const logger = (store) => (next) => (action) => {

    console.log("After... ")
    next(action);
}

const store = createStore(switchStateReducer, {}, applyMiddleware(getData, logger));

export default store;