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
var emptyIcon = require('../../ROOCartPage/imgs/cart_empty_icon.png');

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
          <View style={[styles.vertical,{height:this.props.height,backgroundColor:this.props.color}]}></View>
        );
    }
}
/**
 * 横线组件
 */
class HorizontalLine extends Component{
    render(){
        return (
            <View style={[styles.horizontal,{width:this.props.widths}]}></View>
        );
    }
}
class GreaterThanSignComp extends Component{
    render(){
        return(
          <View style={[styles.flexDirection_row,styles.greaterthanview]}>
              <Text style={{fontSize:14,color:"#666666"}}>{this.props.typeText}</Text>
              <View style={{flex:1}}></View>
              <Text style={{fontSize:12,color:'#999999'}}>{this.props.explainText}</Text>
              <Image style={{width:12,height:12,marginLeft:5}} source={GreaterThanIcon}/>
          </View>
        );
    }
}
class GreaterThanSignComp2 extends Component{
    render(){
        return(
            <View style={[styles.flexDirection_row,styles.greaterthanview2]}>
                <Text style={{fontSize:12,color:"#666666"}}>{this.props.typeText}</Text>
                <View style={{flex:1,marginLeft:5}}>
                    <Text style={{fontSize:12,color:'#999999',justifyContent:'flex-start'}}>{this.props.explainText}</Text>
                </View>
                <Image style={{width:12,height:12,marginLeft:5,alignSelf:'center'}} source={GreaterThanIcon}/>
            </View>
        );
    }
}
class EmptyView extends Component{
    render(){
        return (
            <View style={styles.empty}>
                <Image style={styles.empty_icon} source={emptyIcon}></Image>
                <Text style={styles.tip}>{this.props.text}</Text>
            </View>
        )
    }
}

//bar组件
class TopBarView extends Component{
    render(){
        return (
            <View style={styles.bar}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={this.props._press_back}>
                        <Image style={{width:22,height:22,marginLeft:10}} source={this.props.back_icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={{alignItems:'center',fontSize:16,color:'#333333'}}>{this.props._title}</Text>
                <View style={styles.operate}>
                    <TouchableOpacity onPress={this.props._press_operate_text}>
                        <Text style={{marginRight:this.props._margin_right}}>{this.props.operate_text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props._press_operate_icon}>
                        <Image style={{width:22,height:22}} source={this.props.operate_icon}/>
                    </TouchableOpacity>
                </View>
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
        width:1
    },
    horizontal:{
        height:1,
        backgroundColor:'#F0F0F0',
    },
    greaterthanview:{
        justifyContent:'center',
        alignItems:'center',
        padding:15
    },
    greaterthanview2:{
        padding:15
    },
    empty:{
        flex:1,
        height:120,
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
    },
    empty_icon:{
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    tip:{
        fontSize:12,
        marginTop:10,
    },
    bar:{
        height:50,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    operate:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:10,
    },
});
module.exports =
{
    ImagesTextStyle,
    TextTextStyle,
    VerticalLine,
    HorizontalLine,
    GreaterThanSignComp,
    GreaterThanSignComp2,
    EmptyView,
    TopBarView,
};