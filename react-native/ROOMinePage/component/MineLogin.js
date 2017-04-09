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
    Navigator,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';

const LoginPage = require('../../ROOCommon/component/LoginRegister.js').LoginPage;
const SettingPage = require('./SettingPage.js').SettingPage;
const OrderPage = require('./OrderTab.js').OrderPage;
const MessagePage = require('./MessagePage.js').MessagePage;
import ProductPage from '../../ROOCommon/component/ProductDetails';

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

var logo = require('../../ROOCommon/imgs/logo.jpeg')

class MineLogin extends Component {
    constructor(){
        super();
        //初始化
        this.state={
            isLogin:false,
            username:''
        }
        this.getUserInfo = this.getUserInfo.bind(this);
        //this.gotoLoginRegisterPage = this.gotoLoginRegisterPage.bind(this);
        this.gotoPageByIndex = this.gotoPageByIndex.bind(this);
    }
    //loginView
    _renderLogin(){
        return (
            <TouchableOpacity onPress={() => {this.gotoPageByIndex(1)}}>
                <View style={{width:100,height:30,borderRadius:3,justifyContent:'center',alignItems:'center',backgroundColor:'red',margin:10,}}>
                    <Text style={{color:'#fff',fontSize:12}}>登录/注册</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.middleBox}>
                        <View style={[styles.flexDirection_row]}>
                            <TouchableOpacity onPress={() => {this.gotoPageByIndex(2)}}>
                                <Image style={{width:28,height:28,marginLeft:10}} source={settingIcon}/>
                            </TouchableOpacity>
                            <View style={{flex:1}}/>
                            <TouchableOpacity onPress={() => {this.gotoPageByIndex(5)}}>
                                <Image style={{width:28,height:28,marginRight:10,}} source={messageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headBox}>
                            <Image style={styles.headPhoto} source={logo}/>
                        </View>
                        {this.state.isLogin ? <Text style={styles.headText}>{this.state.username}</Text> : this._renderLogin()}
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
                        <TouchableOpacity onPress={() => {this.gotoPageByIndex(3,0)}}>
                            <GreaterThanSignComp typeText="我的订单" explainText="查看所有订单"/>
                        </TouchableOpacity>
                        <HorizontalLine/>
                        <View style={[styles.flexDirection_row,{marginTop:10,marginBottom:10}]}>
                            <ImagesTextStyle _press={()=>{this.gotoPageByIndex(3,1)}} width='28' height="28" image={obligationIcon} text="待付款" />
                            <ImagesTextStyle _press={()=>{this.gotoPageByIndex(3,2)}} width='28' height="28" image={preparedShippingIcon} text="待发货" />
                            <ImagesTextStyle _press={()=>{this.gotoPageByIndex(3,3)}} width='28' height="28" image={preparedTakeDeliveryIcon} text="待收货" />
                            <ImagesTextStyle _press={()=>{this.gotoPageByIndex(3,4)}} width='28' height="28" image={preparedEvaluateIcon} text="待评价" />
                            <ImagesTextStyle _press={()=>{this.gotoPageByIndex(4)}} width='28' height="28" image={returnsRefundsIcon} text="退货退款"/>
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
    /***************组件***************************/
    //订单状态
    //_renderOrderStatus(){
    //    return (
    //        <View></View>
    //    );
    //}
    /***************数据获取***************************/
    getUserInfo(){

    }

    /***************页面跳转***************************/
    //跳转页面
    gotoPageByIndex(index,order = -1){
        var _this = this;
        switch(index){
            case 1://登录页面
                this.props.navigator.push({
                    component: LoginPage,
                    params:{
                        getUserStatus:function(username,isLogin){
                            _this.setState({
                                username : username,
                                isLogin : isLogin
                            })
                        }
                    }
                })
                break;
            case 2://跳转至设置页面
                this.props.navigator.push({
                    component: ProductPage,
                })
                break;
            case 3://订单页面
                this.props.navigator.push({
                    component:OrderPage,
                    params:{
                        order:order
                    }
                })
                break;
            //case 4:
            //    this.props.navigator.push({
            //        component:RefundOrderPage
            //    })
            //    break;
            case 5://消息中心页面
                this.props.navigator.push({
                    component:MessagePage,
                })
                break;
            default:
                break;
        }
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
    },
    headPhoto:{
        width:60,
        height:60,
        borderRadius:30,
    },
    headText:{
        fontSize:18,
        margin:10,
        color:'#333333',
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