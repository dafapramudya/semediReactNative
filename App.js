import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

import ExampleMain from './components/example_main/Main';
import ExampleState from './components/example_state/Main';
import ExampleProps from './components/example_component_props/Main';
import ExampleFlex from './components/example_flex/Main';
import ExampleLifecycle from './components/example_lifecycle/Main';
import ExampleNativeBase from './components/example_native_base/Main';
import MyAnimeList from './components/example_list/MyAnimeList';
// import ExampleScreen from './components/example_screen/HeadTabs';
import ExampleFetchAPI from './components/example_fetch_api/Main'
import ExampleFetchAPICreate from './components/example_fetch_api/Create'
import ExampleFetchAPIUpdate from './components/example_fetch_api/Update'


const App = StackNavigator({
    RouteMain: {
        screen: ExampleMain,
        navigationOptions: {
            title: "Dumbways Batch 2"
        }
    },

    RouteState: {
        screen: ExampleState,
        navigationOptions: {
            title: "State"
        }
    },

    RouteProps: {
        screen: ExampleProps,
        navigationOptions:{
            title: "Props"
        }
    },

    RouteFlex: {
        screen: ExampleFlex,
        navigationOptions:{
            title: "Flex"
        }
    },

    RouteLifecycle: {
        screen: ExampleLifecycle,
        navigationOptions:{
            title: "LifeCycle"
        }
    },

    RouteNB:{
        screen: ExampleNativeBase,
        navigationOptions:{
            title: "Native Base"
        }
    },

    RouteList:{
        screen: MyAnimeList,
        navigationOptions:{
            title: "Wibu Club"
        }
    },

    // RouteScreen:{
    //     screen: ExampleScreen,
    //     navigationOptions:{
    //         title: "Home"
    //     }
    // },

    RouteFetchAPI:{
        screen: ExampleFetchAPI,
        navigationOptions:{
            title: "Example CRUD"
        }
    },

    RouteFetchApiCreate:{
        screen: ExampleFetchAPICreate,
        navigationOptions:{
            title: "Example Create"
        }
    },

    RouteFetchApiUpdate:{
        screen: ExampleFetchAPIUpdate,
        navigationOptions:{
            title: "Example Update"
        }
    },
},

{
    initialRouteName: 'RouteMain'
});

export default App;