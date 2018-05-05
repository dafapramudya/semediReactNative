import { createStore, combineReducers } from 'redux';

//Make Reducer per item
const heroesReducers = function(state={}, action){
    switch(action.type){
        case "NAME":
            state = {...state, name: action.payload};
        default:
    }
    return state;
}

const roleReducers = function(state={}, action){
    switch(action.type){
        case "ROLE":
            state = {...state, role: action.payload};
        default:
    }
    return state;
}

const skillReducers = function(state={}, action){
    switch(action.type){
        case "SKILLS":
            state = {...state, skills: action.payload.skill1}
    }
    return state;
}

//Make root Reducer
const reducers = combineReducers({
    heroes: heroesReducers,
    role: roleReducers,
    skill: skillReducers
});

//Create store
const store = createStore(reducers);

//Subcsribe
store.subscribe(() => {
    alert("Hero's name is: " + JSON.stringify(store.getState()));
})

//Dispatch
store.dispatch({type: "NAME", payload: "Fanny"});
store.dispatch({type: "ROLE", payload: "Assassin"});
store.dispatch({type:"SKILLS", payload: {
    skill1: "Wing Blade",
    skill2: "Steel Cable",
    skill3: "Cut Throat"
}});