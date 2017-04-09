/*
 *create by zhujianlong 2017.3.31
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

import PersonalPage from './MineLogin';

const LOGIN_REGISTER_PAGE = require('../constants/Constants').LOGIN_REGISTER_PAGE;

class MinePage extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{ name: LOGIN_REGISTER_PAGE, component: PersonalPage }}
                //页面跳转动画  可以返回多个动画  使用||返回
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                 }}
                //渲染场景  route中就是我们自定义的 name 和 component
                //navigator 就是Navigator对象
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //Component 是route的component参数值  在路由中初始化的component的参数值是 defaultComponent
                    //所以 Component组件就是FirstPageComponent组件
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }

}

const styles = StyleSheet.create({
});
module.exports = MinePage;