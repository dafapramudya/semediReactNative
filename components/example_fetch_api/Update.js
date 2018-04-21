import React, {Component} from 'react';
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base';
import axios from 'axios';

const uri = 'https://api.backendless.com/8F004866-5ECD-AE1D-FF6C-16AC04D53100/0800C57E-1F27-5903-FF6B-D6ECC49D5500/data'

export default class Update extends Component{

  state = {
    post: {}
  }

  componentDidMount(){
      //GET id from props
      const {id} = this.props.navigation.state.params
      //GET Single post by id
      axios.get(`${uri}/posts/${id}`).then(result =>{
          this.setState({
              post: result.data
          })
      })
  }

  handleSubmit(){
    const {allPosts, id} = this.props.navigation.state.params
    //Put data by id into API
    axios
      .put(`${uri}/posts/${id}`, this.state.post)
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
              onChangeText={title=> this.setState({post: {...this.state.post, title} })
            }
              value={this.state.post.title}
            />
          </Item>

          {/* <Item inlineLabel>
            <Label>Slug</Label>
            <Input
              onChangeText={
                title=> this.setState({ post: {...this.state.post, slug} })
              }
              value={this.state.post.slug}
            />
          </Item> */}

          <Button success onPress={()=> this.handleSubmit()}>
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
    )
  }

}