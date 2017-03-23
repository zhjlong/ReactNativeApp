/**
 *create by zhujianlong 2017.3.21
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
var GreaterThanIcon = require('../imgs/greater_than_icon.png');

/**
 * 图文组件
 */
class ImagesTextStyle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={this.props.image}/>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
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
/**
 * 竖线组件
 * */
class VerticalLine extends Component{
    render(){
        return (
          <View style={[styles.vertical,{height:this.props.height}]}></View>
        );
    }
}

/**
 * 横线组件
 */
class HorizontalLine extends Component{
    render(){
        return (
            <View style={[styles.horizontal,{width:this.props.width}]}></View>
        );
    }
}

class GreaterThanSignComp extends Component{
    render(){
        return(
          <View style={[styles.flexDirection_row,styles.greaterthanview]}>
              <Text style={{fontSize:16,color:"#333333"}}>{this.props.typeText}</Text>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:12,color:'#999999'}}>{this.props.explainText}</Text>
              <Image style={{width:12,height:12,marginLeft:5}} source={GreaterThanIcon}/>
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
    },
    vertical:{
        width:1,
        backgroundColor:'#F0F0F0',
    },
    horizontal:{
        height:1,
        backgroundColor:'#F0F0F0',
    },
    greaterthanview:{
        justifyContent:'center',
        alignItems:'center',
        padding:15
    }
});
module.exports = {ImagesTextStyle,TextTextStyle,VerticalLine,HorizontalLine,GreaterThanSignComp};