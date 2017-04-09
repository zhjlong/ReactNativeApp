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

import ScrollableTab from 'react-native-scrollable-tab-view';

const viewWidth = Dimensions.get('window').width;
const EmptyView = require('../../ROOCommon/component/CommonElements.js').EmptyView;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const GreaterThanSignComp = require('../../ROOCommon/component/CommonElements.js').GreaterThanSignComp;

var backIcon = require('../../ROOCommon/imgs/back_icon.png');
var searchIcon = require('../../ROOCommon/imgs/search_icon.png');
var cartIcon = require('../../ROOCartPage/imgs/cart_empty_icon.png');

class OrderPage extends Component {
    constructor(props) {
        super(props)
        this._pressBackButton = this._pressBackButton.bind(this);
        this.state = {
            initialPage:0
        }
    }

    componentWillMount(){
        var initialPage = this.props.order;
        this.setState({
            initialPage : initialPage,
        })
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
                    <View style={styles.title}>
                        <TouchableOpacity onPress={this._pressBackButton}>
                            <Image style={{width:22,height:22,marginLeft:10}} source={backIcon}/>
                        </TouchableOpacity>
                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                            <Text style={{alignItems:'center',fontSize:16,color:'#333'}}>我的订单</Text>
                        </View>
                        <View style={{width:22,marginRight:10}}>
                            <TouchableOpacity onPress={() => {alert('search')}}>
                                <Image style={{width:22,height:22}} source={searchIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <HorizontalLine/>
                    <ScrollableTab
                        locked={true}
                        tabBarPosition='top'
                        initialPage={this.state.initialPage}
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                        tabBarBackgroundColor='#FFFFFF'
                        tabBarTextStyle={{fontSize: 13,color:'#666666'}}>
                        <View tabLabel="全部">
                            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                                <EmptyView text="没有订单!!"/>
                            </ScrollView></View>
                        <View tabLabel="待付款">
                            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                                <EmptyView text="没有订单!!"/></ScrollView></View>
                        <View tabLabel="待发货">
                            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                                <EmptyView text="没有订单!!"/></ScrollView></View>
                        <View tabLabel="待收货">
                            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                                <EmptyView text="没有订单!!"/></ScrollView></View>
                        <View tabLabel="待评价">
                            <ScrollView keyboardShouldPersistTaps='true' showsVerticalScrollIndicator={false}>
                                <EmptyView text="没有订单!!"/></ScrollView></View>
                    </ScrollableTab>
                </View>
        );
    }
    /************************组件**********************/
    //订单组件
    _renderOrderTabView(){
        return (
          <View>
              <View style={styles.order_empty}>
                  <Image style={styles.order_empty_icon} source={cartIcon}></Image>
                  <Text style={styles.tip}>订单是空的!!!</Text>
              </View>
          </View>
        );
    }
    //搜索
    _renderSearch(){
        return (
            <TouchableOpacity onPress={()=>{alert('search')}}>
                <View>
                    <Image source={searchIcon}/>
                </View>
            </TouchableOpacity>
        );
    }
    /**********************获取数据*********************/


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F0F0F0',
    },
    title:{
        width:viewWidth,
        height:50,
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
    },
    tabBarUnderlineStyle:{
        height:1,
        width:viewWidth/8,
        backgroundColor:'#666666',
        marginLeft:((viewWidth/5 - viewWidth/8)/2)
    },
    order_empty:{
        height:120,
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
    },
    order_empty_icon:{
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    tip:{
        fontSize:12,
        marginTop:10,
    }

});
module.exports = {OrderPage};