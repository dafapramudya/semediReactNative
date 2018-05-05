import React, {Component} from 'react';
import { Container, Content, List, ListItem} from 'native-base';
import axios from 'axios';

import Notifications from './components/Notifications'

export default class NotificationItem extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Notifications {...this.props}/>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}