/**
 *create by zhujianlong 2017.3.23
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CartComp from './CartPage.js';
class CartPage extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <CartComp />
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
module.exports = CartPage;