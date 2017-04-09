/*
 *create by zhujianlong 2017.4.2
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
    Image,
    Navigator,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import TabPage from './MainPage';

class MinePage extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ component:TabPage }}
                //渲染场景  route中就是我们自定义的 name 和 component
                //navigator 就是Navigator对象
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }

}

module.exports = MinePage;