import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Coffe from './Coffe';

export default class Glass extends Component{
    render(){

        const info = {
            color: "Black",
            taste: "is very delicious!"
        }

        return(
            <View>
                <Text>Glass</Text>
                <Coffe type="Expreesso" bean="robusta" info={info} volume={1}/>
            </View>
        )
    }
}