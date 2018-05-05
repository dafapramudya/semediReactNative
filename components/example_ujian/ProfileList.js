import React, { Component } from 'react';
import { Button, Content, Text, Icon, Container, Label, Header, Body, List, ListItem, Card, CardItem, Image, Thumbnail, Left, Right } from 'native-base';
import { StyleSheet, View} from 'react-native';
import axios from 'axios';

import ProfileRow from './ProfileRow';

export default class ProfileList extends Component{

    state = {
        

        biodata:[],

        highlights: []
    }

    getBiodata(){
        const url = "https://api.backendless.com/BD818CEE-29B9-83AD-FFCC-C2FFAD404800/8B60271E-6FBD-506A-FFDE-EA1CF6461700/data/profiles"
        axios.get(url).then(result => {
            this.setState({
                biodata: result.data
            })
        })
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
        this.getBiodata()
        this.getHighLights()
    }

    handleDelete(id){
        const url = "https://api.backendless.com/BD818CEE-29B9-83AD-FFCC-C2FFAD404800/8B60271E-6FBD-506A-FFDE-EA1CF6461700/data/profiles"
        axios.delete(`${url}/${id}`).then(result => {
            if(result.data){
                alert("Profile has been deleted")
            }
        })
    }    

    render(){
        return(
            <Container>
                <Content>
                    
                    
                    
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={[styles.avatar, styles.avatarContainer]}>
                                    <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/manager-128.png'}} />
                                </View>
                                {this.state.biodata.map(item => {
                                    return (
                                        <View style={styles.name } key={item.objectId}>
                                        <   Text style={{fontSize: 27}}>{item.name}</Text>
                                        </View>
                                    );
                                })}
                                
                                
                                {this.state.biodata.map(item => {
                                    return (
                                        <View style={styles.profesion } key={item.objectId}>
                                        <Text>{item.profesi}</Text>
                                        </View>
                                    );
                                })}
                                {this.state.biodata.map(item => {
                                    return (
                                        <View style={styles.univ } key={item.objectId}>
                                        <Text>{item.graduateAt}</Text>
                                        </View>
                                    );
                                })}
                                {this.state.biodata.map(item => {
                                    return (
                                        <View style={styles.as } key={item.objectId}>
                                        <Text>{item.as}</Text>
                                        </View>
                                    );
                                })}
                                <View style={{alignItems: "center", alignSelf: "center", marginBottom: 10, marginTop: 20}}>
                                    <Button light>
                                        <Text>MESSAGE</Text>
                                    </Button>
                                    <Button info>
                                        <Text>CONNECT</Text>
                                    </Button>
                                </View>
                                {this.state.biodata.map(item => {
                                    return (
                                        <View style={styles.quotes } key={item.objectId}>
                                            <Text>{item.quote}</Text>
                                        </View>
                                    );
                                })}
                                
                            </Body>
                        </CardItem>
                    </Card>
                    
                    <Card>
                        <CardItem header>
                            <Text style={styles.higlightHead}>Highlights</Text>
                        </CardItem>
                    </Card>
                    {this.state.highlights.map(item => {
                        return (
                            <ProfileRow head={item.title} descriptions={item.description} objectId={item.objectId}/>
                        );
                    })}

                    <View style={{alignItems: "center", alignSelf: "center", marginBottom: 10, marginTop: 20}}>

                        {this.state.highlights.map(item => {
                            return (
                                <Button warning onPress={() => this.props.navigation.navigate("UpdateProfile", {
                                    name: item.name,
                                    profesi: item.profesi,
                                    graduateAt: item.graduateAt,
                                    as: item.as,
                                    quote: item.quote
                                    }) }>
                                    <Text>UPDATE PROFILE</Text>
                                </Button>
                            );
                        })}

                        {this.state.highlights.map(item => {
                            return (
                                <Button danger onPress={() => this.handleDelete(item.objectId)}>
                                    <Text>DELETE PROFILE</Text>
                                </Button>
                            );
                        })}
                        
                    </View>
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
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
    },

    univ: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
    },

    as: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
    },

    quotes: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 20,
        marginBottom: 20
    },

    higlightHead:{
        color: "#555555"
    }
  });