import { StackNavigator } from 'react-navigation';

import TodosList from '../todos/screens/TodosList'
import TodosCreate from '../todos/screens/TodosCreate'
import FoodsList from '../foods/screens/FoodsList'

const RootNavigator = StackNavigator({
  TodosList: {
    screen: TodosList,
    navigationOptions: {
      title: 'Todos List'
    }
  },
})

export default RootNavigator;