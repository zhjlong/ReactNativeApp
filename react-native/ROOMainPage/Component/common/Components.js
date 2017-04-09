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
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

var viewWidth = Dimensions.get('window').width;
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
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.product}>
                    <Image style={styles.product_img} source={{uri:this.props.image}}/>
                    <Text numberOfLines={2} style={styles.product_text}>{this.props.details}</Text>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                        <Text style={{fontSize:12}}>
                            ¥<Text style={{fontSize:13}}>{this.props.marketPrice}</Text>
                        </Text>
                        <View style={{marginLeft:5}}>
                            <Text style={{fontSize:11}}>{this.props.memberPrice}</Text>
                            <View style={{width:28,height:1,backgroundColor:'#E01A3B',marginTop:-7}}></View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
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
        width:viewWidth/3,
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
        width:90,
        height:90,
        alignSelf:'center',
        marginTop:5,
    },
    product_text:{
        fontSize:12,
        marginLeft:15,
        marginRight:10,
        alignSelf:'center',
    }
});
module.exports = {CardComponent,ProductShowComp};