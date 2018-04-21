import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Iam Header</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyText}>Iam Body</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Iam Footer</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container:{
        flex: 1
    },

    header:{
        flex: 1,
        backgroundColor: 'red'
    },

    headerText:{
        justifyContent: 'center',
        alignSelf: 'flex-start',
        fontSize: 20
    },

    body:{
        flex: 2,
        backgroundColor: 'yellow'
    },

    bodyText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30
    },

    footer:{
        flex: 3,
        backgroundColor: 'green'
    },
    
    footerText:{
        justifyContent: 'center',
        alignSelf: 'flex-end',
        fontSize: 40
    }
}