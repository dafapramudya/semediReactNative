import React, {Component} from 'react'
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/8F004866-5ECD-AE1D-FF6C-16AC04D53100/0800C57E-1F27-5903-FF6B-D6ECC49D5500/data'

export default class Create extends Component{

  state = {
    title: ""
  }

  handleSubmit(){
    const {allPosts} = this.props.navigation.state.params
    //POST data into API
    axios
      .post(`${uri}/posts`, {title: this.state.title})
      .then(result=>{
        //if success, get latest data from API
        if(result.data){
          allPosts()
          this.props.navigation.goBack()
        }
      })
  }

  render(){
    return (
      <Container>
        <Content>

          <Item inlineLabel>
            <Label>Title</Label>
            <Input
              onChangeText={title=> this.setState({title})}
              value={this.state.title}
            />
          </Item>

          <Button success onPress={()=> this.handleSubmit()}>
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
    )
  }

}