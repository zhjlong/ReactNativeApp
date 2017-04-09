/**
 * create by zhujianlong 2017.4.2
 * 设置页面
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    Navigator,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';

const viewWidth = Dimensions.get('window').width;
const TopBarView = require('../../ROOCommon/component/CommonElements.js').TopBarView;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const GreaterThanSignComp = require('../../ROOCommon/component/CommonElements.js').GreaterThanSignComp;


var backIcon = require('../../ROOCommon/imgs/back_icon.png');

class MessagePage extends Component {
    constructor(props) {
        super(props)
        this._pressBackButton = this._pressBackButton.bind(this);
        this.state = {
        }
    }

    //返回键
    _pressBackButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBarView
                    _title = "消息中心"
                    back_icon = {backIcon}
                    _press_back = {this._pressBackButton}/>
                <HorizontalLine/>
                <ScrollView style={{flex:1}}>
                    <View style={{marginTop:10,backgroundColor:'#FFFFFF'}}>
                    </View>
                </ScrollView>
            </View>
        );
    }
    /**********************上传数据*********************/

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F0F0F0',
    },
    title:{
        width:viewWidth,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center'
    },
    logout:{
        width:150,
        height:40,
        marginTop:15,
        borderWidth:1,
        borderColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
    }
});
module.exports = {MessagePage};