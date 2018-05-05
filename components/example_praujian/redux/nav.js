import RootNavigator from '../navigators/rootNavigator';

const initialState = RootNavigator.router.getStateForAction(RootNavigator.getActionForPathAndParams("NotificationsList"));

const navReducer = (state = initialState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state)

    
    return state || nextState
}

export default navReducer
