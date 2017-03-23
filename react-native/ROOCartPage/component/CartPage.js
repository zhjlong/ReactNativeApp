/**
 * 购物车模块
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const messageIcon = require('../../ROOCommon/imgs/message_icon.png');
const cartEmptyIcon = require('../imgs/cart_empty_icon.png');
const circleIcon = require('../imgs/circle_icon.png');
const homeIcon = require('../../ROOMainPage/images/home_ic_normal.png');
const bar3 = require('../../ROOMainPage/images/bar/bar3.jpg');

class CartPage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectCategoryIndex:0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cart_bar}>
                    <View style={{flex:1}}/>
                    <Text style={{fontSize:16}}>购物车</Text>
                    <View style={styles.edit_message}>
                        <TouchableOpacity onPress={() => {alert('edit')}}>
                            <Text style={{marginRight:8}}>编辑</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {alert('message')}}>
                            <Image style={{width:25,height:25}} source={messageIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <HorizontalLine/>
                {this._rendercart()}
            </View>
        );
    }

    /**
     * 购物车为空
     */
    _renderEmptyCart(){
        return (
            <View style={styles.cart_empty}>
                <Image style={styles.cart_empty_icon} source={cartEmptyIcon}></Image>
                <Text style={styles.tip}>购物车竟然是空的</Text>
            </View>
        )
    }

    /**
     * 购物车有商品
     */
    _rendercart(){
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View>
                    <View style={styles.cart}>
                        <View style={styles.cartAddress}>
                            <Image style={styles.circle} source={circleIcon}/>
                            <Image style={styles.home} source={homeIcon}/>
                            <Text>自营国内仓</Text>
                        </View>
                        <HorizontalLine/>
                        <View style={styles.product}>
                            <Image style={styles.circle} source={circleIcon}/>
                            <View style={styles.product_detail}>
                                <Image style={{width:60,height:50,marginLeft:10}} source={bar3}/>
                                <Text style={styles.product_title} numberOfLines={2}>Meilin 美林 宝宝辅食苹果蓝莓泥 100克/罐 2罐装</Text>
                                <View style={{width:50,marginRight:15}}>
                                    <Text style={{marginTop:3,fontSize:12}}>¥38.00</Text>
                                    <Text style={{fontSize:12,alignSelf:'flex-end',marginRight:12}}>×1</Text>
                                </View>
                            </View>
                        </View>
                        <HorizontalLine/>
                    </View>
                    <View style={{marginTop:10}}>
                        <HorizontalLine/>
                        <View style={styles.cartAddress}>
                            <Image style={styles.circle} source={circleIcon}/>
                            <Image style={styles.home} source={homeIcon}/>
                            <Text>自营国内仓</Text>
                        </View>
                        <HorizontalLine/>
                        <View style={styles.product}>
                            <Image style={styles.circle} source={circleIcon}/>
                            <View style={styles.product_detail}>
                                <Image style={{width:60,height:50,marginLeft:10}} source={bar3}/>
                                <Text style={styles.product_title} numberOfLines={2}>Meilin 美林 宝宝辅食苹果蓝莓泥 100克/罐 2罐装</Text>
                                <View style={{width:50,marginRight:15}}>
                                    <Text style={{marginTop:3,fontSize:12}}>¥38.00</Text>
                                    <Text style={{fontSize:12,alignSelf:'flex-end',marginRight:12}}>×1</Text>
                                </View>
                            </View>
                        </View>
                        <HorizontalLine/>
                    </View>
                        <View style={{marginTop:10}}>
                            <HorizontalLine/>
                            <View style={styles.cartAddress}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <Image style={styles.home} source={homeIcon}/>
                                <Text>自营国内仓</Text>
                            </View>
                            <HorizontalLine/>
                            <View style={styles.product}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <View style={styles.product_detail}>
                                    <Image style={{width:60,height:50,marginLeft:10}} source={bar3}/>
                                    <Text style={styles.product_title} numberOfLines={2}>Meilin 美林 宝宝辅食苹果蓝莓泥 100克/罐 2罐装</Text>
                                    <View style={{width:50,marginRight:15}}>
                                        <Text style={{marginTop:3,fontSize:12}}>¥38.00</Text>
                                        <Text style={{fontSize:12,alignSelf:'flex-end',marginRight:12}}>×1</Text>
                                    </View>
                                </View>
                            </View>
                            <HorizontalLine/>
                        </View>
                        <View style={{marginTop:10}}>
                            <HorizontalLine/>
                            <View style={styles.cartAddress}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <Image style={styles.home} source={homeIcon}/>
                                <Text>自营国内仓</Text>
                            </View>
                            <HorizontalLine/>
                            <View style={styles.product}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <View style={styles.product_detail}>
                                    <Image style={{width:60,height:50,marginLeft:10}} source={bar3}/>
                                    <Text style={styles.product_title} numberOfLines={2}>Meilin 美林 宝宝辅食苹果蓝莓泥 100克/罐 2罐装</Text>
                                    <View style={{width:50,marginRight:15}}>
                                        <Text style={{marginTop:3,fontSize:12}}>¥38.00</Text>
                                        <Text style={{fontSize:12,alignSelf:'flex-end',marginRight:12}}>×1</Text>
                                    </View>
                                </View>
                            </View>
                            <HorizontalLine/>
                        </View>
                        <View style={{marginTop:10}}>
                            <HorizontalLine/>
                            <View style={styles.cartAddress}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <Image style={styles.home} source={homeIcon}/>
                                <Text>自营国内仓</Text>
                            </View>
                            <HorizontalLine/>
                            <View style={styles.product}>
                                <Image style={styles.circle} source={circleIcon}/>
                                <View style={styles.product_detail}>
                                    <Image style={{width:60,height:50,marginLeft:10}} source={bar3}/>
                                    <Text style={styles.product_title} numberOfLines={2}>Meilin 美林 宝宝辅食苹果蓝莓泥 100克/罐 2罐装</Text>
                                    <View style={{width:50,marginRight:15}}>
                                        <Text style={{marginTop:3,fontSize:12}}>¥38.00</Text>
                                        <Text style={{fontSize:12,alignSelf:'flex-end',marginRight:12}}>×1</Text>
                                    </View>
                                </View>
                            </View>
                            <HorizontalLine/>
                        </View>
                    </View>
                </ScrollView>
                <HorizontalLine/>
                <View style={styles.account}>
                    <Image style={styles.circle} source={circleIcon}/>
                    <Text style={{marginLeft:6,fontSize:12}}>全选</Text>
                    <Text style={{flex:1,marginLeft:30}}>总计:¥38.00</Text>
                    <View style={styles.account_button}>
                        <Text style={{color:'#fff'}}>结算(5)</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cartAddress:{
        height:30,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#FFF',
    },
    cart:{
    },
    circle:{
        width:20,
        height:20,
        marginLeft:15,
    },
    home:{
        width:18,
        height:18,
        marginLeft:10,
    },
    cart_bar:{
        height:50,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    edit_message:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:10,
    },
    cart_empty:{
        height:120,
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
    },
    cart_empty_icon:{
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    tip:{
        fontSize:12,
        marginTop:10,
    },
    product:{
        height:100,
        backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:15,
    },
    product_detail:{
        flexDirection:'row',
    },
    product_title:{
        flex:1,
        fontSize:12,
        marginLeft:10,
        marginRight:10,
        lineHeight:20,
    },
    account:{
        height:45,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
    },
    account_button:{
        width:70,
        height:45,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    }
});
module.exports = CartPage;
