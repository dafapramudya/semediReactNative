import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Main extends Component{
  colors = ['red', 'green', 'blue', 'pink', 'yellow', 'black', 'gray']

  state = {
    text: "Hello",
    counter: 0,
    colorSelected: 0
  }

  handleChangeText(){

    if(this.state.counter < 5){
      this.setState({
        text: "Clicked",
        counter: this.state.counter + 1
      })
    }
  }

  handleChangeBtnColor(){
    if(this.state.colorSelected > this.colors.length - 2){
      this.setState({
        colorSelected: 0
      })
    }else{
      this.setState({
        colorSelected: this.state.colorSelected + 1
      })
    }
  }

  render(){
    const backgroundColor = this.colors[this.state.colorSelected]
    console.log(this.props.navigation)
    return (
      <View>
        <Text>{this.props.navigation.state.params.propsFromMain}</Text>
        <Text>{this.state.text}</Text>
        <Text>{this.state.counter}</Text>
        <TouchableOpacity onPress={()=> this.handleChangeText()}>
          <Text>Click to change text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor, padding: 5}} onPress={()=> this.handleChangeBtnColor()}>
          <Text style={{fontSize: 16, color: 'white'}}>{backgroundColor}</Text>
        </TouchableOpacity>
      </View>
    )
  }

}