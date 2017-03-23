/**
 *create by zhujianlong 2017.3.22
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CategoryComp from './CategoryComp.js';
class ClassifyPage extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <CategoryComp />
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
module.exports = ClassifyPage;