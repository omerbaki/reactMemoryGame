import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView
} from 'react-native';

import Board from './Board';
import TileStore from '../stores/TileStore';

class GameApp extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            isWaiting: false,
            tiles: TileStore.getAll()
        };
    }

    tileFlipped(tileId){
        if(this.state.isWaiting) return;

        var firstFlipIndex = TileStore.getFirstFlipIndex();

        if(firstFlipIndex !== null) {
            if(parseInt(firstFlipIndex) === parseInt(tileId)) {
                return;
            }

            TileStore.tileFlipped(tileId);

            this.setState({
                isWaiting: true
            });

            setTimeout(function () {
                TileStore.matchCheck();
                this.setState({
                    isWaiting: false,
                });
            }.bind(this), 2000);
        }
        else{
            TileStore.tileFlipped(tileId);
        }

        this.setState({
            tiles: TileStore.getAll()
        });


    }

    render() {
        return (
            <Board tiles={this.state.tiles}
                   tileFlipped={this.tileFlipped.bind(this)}
                   isWaiting={this.state.isWaiting}>
            </Board>
        );
    }
}



export default GameApp;