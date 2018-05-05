import { StackNavigator } from 'react-navigation';

import NotificationsList from '../screens/NotificationList';

const RootNavigator = StackNavigator ({
    NotificationsList: {
        screen: NotificationsList,
        navigationOptions:{
            title: "Notification List"
        }
    }
})