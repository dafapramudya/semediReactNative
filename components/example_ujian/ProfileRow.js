import React, { Component } from 'react';
import { Button, Content, Text, Icon, Container, Header, Body, List, ListItem, Card, CardItem, Image, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios';
import { StyleSheet, View} from 'react-native';

export default class ProfileList extends Component{

    state = {

        highlights: []
    }

    getHighLights(){
        const url = "https://api.backendless.com/BD818CEE-29B9-83AD-FFCC-C2FFAD404800/8B60271E-6FBD-506A-FFDE-EA1CF6461700/data/highlights?sortBy=created%20desc"
        axios.get(url).then(result => {
            this.setState({
                highlights: result.data
            })
        })
    }

    componentDidMount(){
        this.getHighLights()
    }

    render(){

        const {head, descriptions, objectId} = this.props;

        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem key={objectId}>
                            <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/manager-128.png'}} />
                            <View>
                                <Text>{head}</Text>
                                <Text>{descriptions}</Text>
                            </View>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
      borderColor: "#9B9B9B",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    avatar: {
      borderRadius: 75,
      width: 200,
      height: 200,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginTop: 80
    },

    name: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 24
    },

    profesion: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        fontSize: 20,
        marginLeft: 55
    },

    univ: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        fontSize: 20,
        marginLeft: 200
    },

    as: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        fontSize: 20,
        marginLeft: 150
    },

    higlightHead:{
        color: "#555555"
    }
  });