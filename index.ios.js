/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import GameApp from './reactSrc/js/components/GameApp';

class reactMemoryGame extends Component {
    render() {
        return (
            <GameApp></GameApp>
        );
    }
}

AppRegistry.registerComponent('reactMemoryGame', () => reactMemoryGame);
