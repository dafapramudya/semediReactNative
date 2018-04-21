import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Cup from './Cup';
import Glass from './Glass';

export default class Main extends Component{
    render(){
        return(
            <View>
                <Cup/>
                <Glass/>
            </View>
        )
    }
}