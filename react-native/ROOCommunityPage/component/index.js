/**
 *create by zhujianlong 2017.3.24
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CommunityComp from './CommunityPage.js';
class CommunityPage extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <CommunityComp />
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
module.exports = CommunityPage;