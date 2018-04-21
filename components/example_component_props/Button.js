import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Button extends Component
{

  componentDidMount()
  {
    console.log("Component button did mount")
  }

  componentWillUnmount()
  {
    console.log("Component button will unmount")
  }

  render()
  {
    // return
    // (
    //   <View style={this.props.design}>
        
    //       {this.props.children}
        
    //   </View>
    // )

    return(
      <View style={this.props.design}>
        {this.props.children}
      </View>
    )
  }
    
}