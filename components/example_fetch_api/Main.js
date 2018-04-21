import React, {Component} from 'react'
import {
  Container, Content, List, ListItem, Text, Fab,
  Item, Label, Input, Button, Icon, SwipeRow, View
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/8F004866-5ECD-AE1D-FF6C-16AC04D53100/0800C57E-1F27-5903-FF6B-D6ECC49D5500/data'

export default class Main extends Component{


  state = {
    counter: 1,
    posts: [],
    title: ""
  }

  allPosts(){
    //GET data from API
    axios.get(`${uri}/posts?sortBy=created%20desc`).then((result)=>{
      //set state to return result.data and emptying field title
      this.setState({
        posts: result.data,
        title: ""
      })
    })
  }

  componentDidMount(){
    // let posts = this.state.posts
    // posts[0].title = "post1x"
    // // posts[0]['title'] = "post1x"

    // this.setState({
    //   posts
    // })

    this.allPosts()
  }

  handleSubmit(){
    //POST data to API
    axios.post(`${uri}/posts`, {title: this.state.title}).then(result=>{
      //if success then GET latest data from API
      if(result.data)
        this.allPosts()
    })
  }

  handleDelete(id){
    //call API delete by id
    axios.delete(`${uri}/posts/${id}`).then(result=>{
      this.allPosts()
    })
  }

  handleUpdate(id){
    //navigate to update
    this.props.navigation.navigate(
      'RouteFetchApiUpdate',
      {id, allPosts: this.allPosts.bind(this)}
    )
  }

  render(){
    return (
      <Container>
        <Content>

          <List>

            {/*this.posts.map( (post)=>{
              return (
                <ListItem>
                  <Text>{post}</Text>
                </ListItem>
              )
            } )*/}
            
            {this.state.posts.map((post) => {
                return(
                    <SwipeRow
                        key={post.objectId}
                        rightOpenValue={-75}
                        body={
                            <ListItem >
                                <Text>{post.title}</Text>
                            </ListItem>
                        }
                        right={
                            <View style={{flex: 1, flexDirection: "row"}}>
                                <Button danger onPress={() => this.handleUpdate(post.objectId)}>
                                    <Icon active name="edit" />
                                </Button>
                                <Button danger onPress={() => this.handleDelete(post.objectId)}>
                                    <Icon active name="trash" />
                                </Button>
                            </View>
                        }
                    />
                )
            })}

          </List>
        </Content>

        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {
              this.props.navigation.navigate(
                'RouteFetchApiCreate',
                {allPosts: this.allPosts.bind(this)}
              )
            }}>
            <Icon name="add" />
        </Fab>
      </Container>
    )
  }

}