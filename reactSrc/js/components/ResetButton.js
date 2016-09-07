import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity
} from 'react-native';

class ResetButton extends Component {
    constructor(props, context) {
        super(props, context);
    }

    reset() {
        this.props.reset();
    }

    render() {
        if(this.props.isGameOver) {
            return (
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.resetButton} onPress={this.reset.bind(this)}>
                        <Text style={styles.resetText}>חדש</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else {
            return <View></View>
        }
    }
}

ResetButton.propTypes = {
    reset: React.PropTypes.func.isRequired,
    isGameOver: React.PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
    containerButton:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:30,
    },
    resetButton: {
        backgroundColor: 'rgb(144,238,144)',
        padding: 20
    },
    resetText: {
        fontSize: 18,
        color: 'white'
    }
});

export default ResetButton;