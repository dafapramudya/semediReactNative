import { createStore, applyMiddleware } from 'redux'

//Create Reducer
const reducer = function(state, action){
    if(action.type == "INC"){
        state = state + action.payload;
    }else if(action.type == "DEC"){
        state = state - action.payload;
    }else if(action.type == "ERR"){
        throw new Error("ERROOORRRR");
    }

    return state;
}

// create logger
const logger = (store)=>(next)=>(action)=>{
    alert("logger middleware, called");
    next(action);
}

//create error
const error = (store)=>(next)=>(action)=>{
    try{
        next(action);
    }catch (e) {
        alert("ERROR MIDDLEWARE HAS BEN CALLED")
    }
}

//create middleware
const middleware = applyMiddleware(logger);

//create store
const store = createStore(reducer, 0, middleware)

//Make Subscribe
store.subscribe(()=>{
    alert("store has ben changed to: " + JSON.stringify(store.getState()));
})

//Dispatch
store.dispatch({type: "INC", payload: 7});
store.dispatch({type: "ERR"})
store.dispatch({type: "INC", payload: 7});
