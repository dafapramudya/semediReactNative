import React, { Component, ReactPropTypes } from 'react';
import { View, Text } from 'react-native';

export default class Coffe extends Component{

    render(){

        const {type, bean, info, volume} = this.props;

        return(
            <View>
                <Text>Coffe {type} is made from {bean} bean. It has {volume} liter volume</Text>
                <Text>In my mind this coffe {info.taste} because this coffe has {info.color} color.</Text>
            </View>
        )
    }
}