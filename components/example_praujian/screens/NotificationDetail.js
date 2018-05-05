import React, {Component} from 'react';
import { Container, Content, List, ListItem, Text, Button} from 'native-base';
import axios from 'axios';

export default class NotificationsDetail extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>{this.props.navigation.state.params.item.title}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{this.props.navigation.state.params.item.descriptions}</Text>
                        </ListItem>
                        <Button full onPress={()=> this.props.navigation.navigate("NotificationsItems")}>
                            <Text>Click Me!</Text>
                        </Button>
                    </List>

                    
                </Content>
            </Container>
        )
    }
}