import React, {Component} from 'react';
import { Container, Content, List, ListItem, Text} from 'native-base';
import axios from 'axios';

export default class NotificationList extends Component {

    state = {
        notifications: []
    }

    componentDidMount(){
        let url = "https://api.backendless.com/097A295C-0839-9323-FF39-88B2637E5600/5A4496BC-056E-AC42-FF54-523E63C5BF00/data/notifications";
        axios.get(url).then(result => {
            this.setState({
                notifications: result.data
            })
            
        })
    }

    render(){
        return(
            <Container>
                <Content>
                    <List>
                        {this.state.notifications.map(notification => (
                            <ListItem key={notification.objectId} onPress={()=> this.props.navigation.navigate("NotificationsDetail", {item: notification})}>
                                <Text>{notification.title}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        )
    }
}