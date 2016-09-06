import React, { Component } from 'react';
//import FlipCard from 'react-native-flip-card'
import FlipView from 'react-native-flip-view';

import {
    View,
    Easing,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class Tile extends Component {
    constructor(props, context){
        super(props, context);
    }

    onTileFlipped(){
        this.props.tileFlipped(this.props.id);
    }

    render() {
        return (
            <FlipView style={styles.container}
                      front={this._renderFront()}
                      back={this._renderBack()}
                      isFlipped={this.props.isFlipped}
                      flipAxis="y"
                      flipEasing={Easing.out(Easing.ease)}
                      flipDuration={500}
                      perspective={1000}/>
      );
    }

    _renderFront() {
        return (
            <View style={styles.front}>
                <TouchableOpacity onPress={this.onTileFlipped.bind(this)}>
                    <Image style={styles.image} source={0}/>
                </TouchableOpacity>
            </View>
        );
    }

    _renderBack() {
        return (
            <View style={styles.back}>
                <TouchableOpacity onPress={this.onTileFlipped.bind(this)}>
                    <Image style={styles.image} source={this.props.image}/>
                </TouchableOpacity>
            </View>
        );
    }
}

Tile.propTypes = {
    id: React.PropTypes.number.isRequired,
    tileFlipped: React.PropTypes.func.isRequired,
    clickable: React.PropTypes.bool.isRequired,
    isFlipped: React.PropTypes.bool.isRequired,
    isMatch: React.PropTypes.bool.isRequired,
    image: React.PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    image: {
        width:70,
        height:70,
        backgroundColor: 'skyblue',
    },
    front: {
        width:70,
        height:70,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        width:70,
        height:70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        padding:5,
        width: 80,
        height:80,
        backgroundColor: 'white',
    }
});

export default Tile;