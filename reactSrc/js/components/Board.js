import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView
} from 'react-native';

import Tile from './Tile';

class Board extends Component {
    constructor(props, context) {
        super(props, context);
    }

    tileFlipped(tileId){
        this.props.tileFlipped(tileId);
    }

    render() {
        var tiles = [];

        for (var id in this.props.tiles) {
            id = parseInt(id);
            tiles.push(<Tile key={id} id={id} image={this.props.tiles[id].image}
                             tileFlipped={this.tileFlipped.bind(this)}
                             clickable={!this.props.isWaiting}
                             isFlipped={this.props.tiles[id].flipped}
                             isMatch={this.props.tiles[id].matched}  />);
        }

        return (
            <View style={styles.container}>
                {tiles}
            </View>
        );
    }
}

Board.propTypes = {
    tiles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    tileFlipped: React.PropTypes.func.isRequired,
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
