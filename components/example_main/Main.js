import React, { Component } from 'react';
import { Button, Content, Text, Icon, Container, Header, Body, List, ListItem } from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteState', {propsFromMain: 'Props from Main'})}>
                            <Text>Example State</Text>
                        </ListItem>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteProps')}>
                            <Text>Example Props</Text>
                        </ListItem>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteFlex')}>
                            <Text>Example Flex</Text>
                        </ListItem>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteLifecycle')}>
                            <Text >Example LifeCycle</Text>
                        </ListItem>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteNB')}>
                            <Text>Example NativeBase</Text>
                        </ListItem>
                        <ListItem onPress={()=> this.props.navigation.navigate('RouteList')}>
                            <Text>Go To WibuClub</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}