import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'

const rootReducers = combineReducers({
  nav: nav,
//   todosReducer,
//   foodsReducer,
  form: formReducer
})

export default rootReducers