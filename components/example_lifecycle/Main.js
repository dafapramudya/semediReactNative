import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button as ButtonNB, Text as TextNB } from 'native-base';

import Button from '../example_component_props/Button';

export default class Main extends Component
{

    state = {
        showComponentButton: false
    }

    componentWillMount()
    {
        console.log('component will mount')
    }

    componentDidMount()
    {
        console.log('component did mount')
    }

    componentWillUnmount()
    {
        console.log('component will unmount')
    }

    handleShowHideButton()
    {
        this.setState({
            showComponentButton: !this.state.showComponentButton
        })
    }

    // componentWillUpdate()
    // {

    // }

    // componentDidUpdate()
    // {

    // }

    // componentWillReceiveProps()
    // {

    // }

    render()
    {
        return(
            <View>
                <Text>Example Lifecycle</Text>
                <Text onPress={()=> this.handleShowHideButton()}>Show / Hide Button</Text>

                { this.state.showComponentButton == true ? (
                        <Button>
                            <Text>THis is component Button</Text>
                        </Button>
                    ) : null
                }

                <ButtonNB danger><TextNB>Hallo</TextNB></ButtonNB>
            </View>
        )
    }
}