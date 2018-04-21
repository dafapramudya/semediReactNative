import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
    Container, 
    Header, 
    Body, 
    Text, 
    Footer, 
    Left, 
    Right, 
    Icon,
    Button, 
    Title, 
    Content } from 'native-base';

export default class Main extends Component
{
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=> alert("Iam Menu")} style={{color: '#ffffff'}}></Icon>
                    </Left>
                    <Body>
                        <Title>
                            Example Native
                        </Title>
                    </Body>
                    <Right>
                        <Icon color="#ffffff" name="more" onPress={()=> alert("Iam More")} style={{color: '#ffffff'}}></Icon>
                    </Right>
                </Header>

                <Content>
                    <Text>Content Native Base</Text>
                    <Button light style={styles.button}><Text> Light </Text></Button>
                    <Button primary style={styles.button}><Text> Primary </Text></Button>
                    <Button success style={styles.button}><Text> Success </Text></Button>
                    <Button info style={styles.button}><Text> Info </Text></Button>
                    <Button warning style={styles.button}><Text> Warning </Text></Button>
                    <Button danger style={styles.button}><Text> Danger </Text></Button>
                    <Button dark style={styles.button}><Text> Dark </Text></Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 20
    }
})