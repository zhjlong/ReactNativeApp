/**
 *create by zhujianlong 2017.3.22
 * 搜索组件
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
    TouchableOpacity,
} from 'react-native';
const searchIcon = require('../imgs/search_icon.png');
const messageIcon = require('../imgs/message_icon.png');
const viewWidth = Dimensions.get('window').width;
const HorizontalLine = require('./CommonElements.js').HorizontalLine;
class SearchComp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image style={styles.img} source={searchIcon}/>
                    <TextInput
                        style={styles.style_input}
                        placeholder='请输入您的宝贝'
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor="#999999"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar:{
        width:viewWidth,
        height:45,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    img:{
        width:18,
        height:18,
        marginLeft:5,
        marginTop:6,
    },
    text:{
        fontSize:12,
    },
    search:{
        height:28,
        backgroundColor:'#EAEBED',
        borderRadius:5,
        marginLeft:10,
        marginRight:5,
        flexDirection:'row',
    },
    style_input:{
        flex:1,
        padding:5,
        fontSize:12
    },
});
module.exports = {SearchComp};