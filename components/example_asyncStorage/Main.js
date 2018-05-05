import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            hobby: '',
            textName: '',
            textHobby: ''
        };

        AsyncStorage.getItem('name', (error, result) => {
            if(result){
                this.setState({
                    name: result
                })
            }
        })

        AsyncStorage.getItem('hobby', (error, result) => {
            if(result){
                this.setState({
                    hobby: result
                })
            }
        })
    }

    saveData() {
        let name = this.state.textName;
        let hobby = this.state.textHobby;

        AsyncStorage.setItem('name', name);
        AsyncStorage.setItem('hobby', hobby);
        this.setState({
             name: name,
             hobby: hobby
        });
        alert('Data tersimpan');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Halo! Who is your name?
                </Text>
                <Text style={styles.instructions}>
                    Nama: {this.state.name}{'\n'}
                    Hobi: {this.state.hobby}
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(textName) => this.setState({textName})}
                    placeholder='Nama'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(textHobby) => this.setState({textHobby})}
                    placeholder='Hobi'
                />
                <Button
                    title='Simpan'
                    onPress={() => this.saveData()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 32
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  }
});