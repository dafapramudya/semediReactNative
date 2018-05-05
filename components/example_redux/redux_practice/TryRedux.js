import {createStore} from 'redux';

//Make Reducer
const reducer = function(state, action) {
    switch(action.type){
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
        case "MLT":
            return state * action.payload;
        case "MOD":
            return state / action.payload;
        default:
            return state;
    }
}


// Make Store
const store = createStore(reducer, 0);

//Make subscription (from store)
store.subscribe(() => {
    alert("Now the amount is " + store.getState());
})

// //Make dispatch (action)
store.dispatch({type: "INC", payload: 7});
store.dispatch({type: "DEC", payload: 7});
store.dispatch({type: "MLT", payload: 7});
store.dispatch({type: "MOD", payload: 7});