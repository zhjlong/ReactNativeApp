/*
 *create by zhujianlong 2017.3.7
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
    Dimensions,
    ScrollView,
} from 'react-native';
const ImagesTextStyle = require('./CompCommon.js').ImagesTextStyle;
const TextTextStyle = require('./CompCommon.js').TextTextStyle;
const VerticalLine = require('../../ROOCommon/component/CommonElements.js').VerticalLine;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const GreaterThanSignComp = require('../../ROOCommon/component/CommonElements.js').GreaterThanSignComp;
const viewWidth = Dimensions.get('window').width;
var settingIcon = require('../imgs/setting_icon.png');
var messageIcon = require('../imgs/message_icon.png');
var obligationIcon = require('../imgs/obligation_icon.png');
var preparedShippingIcon = require('../imgs/prepared_shipping_icon.png');
var preparedTakeDeliveryIcon = require('../imgs/prepared_take_delivery_icon.png');
var preparedEvaluateIcon = require('../imgs/prepared_evaluate_icon.png');
var returnsRefundsIcon = require('../imgs/returns_refunds_icon.png');
class MineLogin extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.middleBox}>
                        <View style={[styles.flexDirection_row]}>
                            <Image style={{width:28,height:28,marginLeft:10}} source={settingIcon}/>
                            <View style={{flex:1}}/>
                            <Image style={{width:28,height:28,marginRight:10}} source={messageIcon}/>
                        </View>
                        <View style={styles.headBox}>
                            <Image style={styles.headPhoto}/>
                        </View>
                        <Text style={styles.headText}>zhujianlong</Text>
                    </View>
                    <View style={styles.numberBox}>
                        <TextTextStyle onPress='' text1="0" text2="我的袋鼠豆"/>
                        <VerticalLine/>
                        <TextTextStyle onPress='' text1="0" text2="我的收藏"/>
                        <VerticalLine/>
                        <TextTextStyle onPress='' text1="0" text2="我的关注"/>
                        <VerticalLine/>
                        <TextTextStyle onPress='' text1="0" text2="我的足迹"/>
                    </View>
                    <View style={{marginTop:10,backgroundColor:'#FFFFFF'}}>
                        <GreaterThanSignComp typeText="我的订单" explainText="查看所有订单"/>
                        <HorizontalLine/>
                        <View style={[styles.flexDirection_row,{marginTop:10,marginBottom:10}]}>
                            <ImagesTextStyle onPress='' image={obligationIcon} text="待付款" />
                            <ImagesTextStyle onPress='' image={preparedShippingIcon} text="待发货" />
                            <ImagesTextStyle onPress='' image={preparedTakeDeliveryIcon} text="待收货" />
                            <ImagesTextStyle onPress='' image={preparedEvaluateIcon} text="待评价" />
                            <ImagesTextStyle onPress='' image={returnsRefundsIcon} text="退货退款"/>
                        </View>
                    </View>
                    <View style={{marginTop:10,backgroundColor:'#FFFFFF'}}>
                        <GreaterThanSignComp typeText="会员中心" explainText="会员信息"/>
                        <HorizontalLine/>
                        <GreaterThanSignComp typeText="我的拼团" explainText="查看所有拼团"/>
                        <HorizontalLine/>
                        <GreaterThanSignComp typeText="我的粉丝" explainText="查看所有粉丝"/>
                        <HorizontalLine/>
                        <GreaterThanSignComp typeText="客服帮助"/>
                        <HorizontalLine/>
                        <GreaterThanSignComp typeText="关于App"/>
                        <HorizontalLine/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
    },
    middleBox:{
        width:viewWidth,
        height:180,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#E1EDFC',
        marginTop:-15,
    },
    headBox:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
    },
    headPhoto:{
        width:60,
        height:60,
        backgroundColor:'#333333',
    },
    headText:{
        fontSize:18,
        margin:10,
        color:'white',
    },
    numberBox:{
        flexDirection:'row',
        width:viewWidth,
        height:50,
    },
    fontSize_16:{
        fontSize:16,
    },
    fontSize_12:{
        fontSize:12,
    },
    marginTop_20:{
        marginTop:20,
    }
});
module.exports = MineLogin;