import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';

import Tile from './Tile';
import ResetButton from './ResetButton';

class Board extends Component {
    constructor(props, context) {
        super(props, context);
    }

    tileFlipped(tileId){
        this.props.tileFlipped(tileId);
    }

    reset() {
        this.props.reset();
    }

    render() {
        var tiles = [];
        var isGameOver = true && this.props.tiles.length > 0;

        for (var id in this.props.tiles) {
            if(!this.props.tiles[id].matched) {
                isGameOver = false;
            }
            id = parseInt(id);
            tiles.push(<Tile key={id} id={id} image={this.props.tiles[id].image}
                             tileFlipped={this.tileFlipped.bind(this)}
                             clickable={!this.props.isWaiting}
                             isFlipped={this.props.tiles[id].flipped}
                             isMatch={this.props.tiles[id].matched}  />);
        }

        return (
            <View>
                <View style={styles.container}>
                    {tiles}
                </View>
                <ResetButton reset={this.reset.bind(this)}  isGameOver={isGameOver}/>
            </View>
        );
    }
}

Board.propTypes = {
    tiles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    tileFlipped: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    isWaiting: React.PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    container:{
        paddingTop:80,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default Board;
