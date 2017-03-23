/**
 *create by zhujianlong 2017.3.23
 * 首页里某些组件
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
 * 图文卡片组件
 */
class CardComponent extends Component {
    render() {
        return (
            <View style={[styles.container,{backgroundColor:this.props.bgcolor,}]}>
                <Text style={styles.text1}>{this.props.title}</Text>
                <Text style={styles.text2}>{this.props.details}</Text>
                <Image style={styles.img} source={this.props.images}/>
            </View>
        );
    }
}
/**
 * 商品展示价格组件
 */
class ProductShowComp extends Component{
    render(){
        return (
            <View style={styles.product}>
                <Image style={styles.product_img} source={this.props.image}/>
                <Text numberOfLines={2} style={styles.product_text}>beiens 贝恩施 智能音乐故事可弹奏写字板彩色画画板 18月以上</Text>
                <Text style={{alignSelf:'center',fontSize:12}}>¥138</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
    },
    product:{
        width:110,
        margin:5,
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    img:{
        width:58,
        height:58,
        alignSelf:'flex-end',
        marginTop:5,
    },
    text1:{
        fontSize:14,
    },
    text2:{
        fontSize:12,
        color:'#999',
        marginTop:5,
    },
    product_img:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:5,
    },
    product_text:{
        fontSize:12,
        marginLeft:15,
        marginRight:15,
        alignSelf:'center',
    }
});
module.exports = {CardComponent,ProductShowComp};