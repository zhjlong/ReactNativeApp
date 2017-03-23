/**
*create by zhujianlong 2017.3.7
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import MineLogin from './MineLogin.js';
class MinePage extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <MineLogin />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
module.exports = MinePage;