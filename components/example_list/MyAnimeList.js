import React , { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import Anime from './Anime';

export default class MyAnimeList extends Component{

    animes = [
        'Naruto',
        'One Piece',
        'Fairy Tail',
        'Dragon Ball',
        'One Punch Man'
    ]

    constructor(){
        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.animes)
        }
    }

    render(){
        return(
            <View>
                <Text>List View with DataSource</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Anime anime={rowData}/>}
                />

                <Text>List View with Maps</Text>
                {this.animes.map((anime, key) => <Text key={key}>{anime}</Text>)}
            </View>
        )
    }
}