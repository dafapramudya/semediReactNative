import { createStore, applyMiddleware } from 'redux'
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const uri = "https://api.backendless.com/AA594F0C-EE81-235A-FF0F-DD191FB47500/B6F66370-3BE6-9394-FFBD-A03457837100/data"

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    heroes: []
}

//Create Reducer
const reducer = function(state=initialState, action){
    switch(action.type){
        case "FETCH_HEROES_PENDING":
            return {...state, fetching: true}
            break;
        case "FETCH_HEROES_FULFILLED":
            return {...state, fetching: false, fetched: true, heroes: action.payload}
            break;
        case "FETCH_HEROES_REJECTED":
            return {...state, fetching: false, error: action.payload}
            break;
        default:
    }

    return state;
}

//create middleware
const middleware = applyMiddleware(logger, thunk, promise());

//create store
const store = createStore(reducer, middleware)

//Make Subscribe
store.subscribe(()=>{
    alert("store has ben changed to: " + JSON.stringify(store.getState()));
})

store.dispatch({
    type: "FETCH_HEROES",
    payload: axios.get(`${uri}/heroes`)
})

//Default Dispatch
// store.dispatch((dispatch) => {
//     dispatch({type: "FETCH_HEROES_PENDING"});
//     axios.get(`${uri}/heroes`).then(response => {
//         dispatch({type: "FETCH_HEROES_FULFILLED"});
//     }).catch((err) => {
//         dispatch({type: "FETCH_HEROES_REJECTED"});
//     })
// });
