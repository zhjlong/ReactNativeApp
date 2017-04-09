/**
 *create by zhujianlong 2017.3.7
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
/**
 * 图文组件
 */
class ImagesTextStyle extends Component {
    render() {
        return (
            <TouchableOpacity style={{flex:1}} onPress={this.props._press}>
                <View style={styles.container}>
                    <Image style={styles.img} source={this.props.image}/>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
/**
 * 文文组件
 */
class TextTextStyle extends Component {
    render() {
        return (
            <View style={[styles.container,{height:50,backgroundColor:'#F7FAFF'}]}>
                <Text style={{fontSize:16}}>{this.props.text1}</Text>
                <Text style={{fontSize:12}}>{this.props.text2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    img:{
        width:28,
        height:28,
    },
    text:{
        fontSize:12,
    }
});
module.exports = {ImagesTextStyle,TextTextStyle};