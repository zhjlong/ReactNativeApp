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
  Image
} from 'react-native';

//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import MinePage from '../../ROOMinePage/component/index.js';
import ClassifyPage from '../../ROOClassifyPage/component/index.js';
import HomePage from './HomePage.js';
import SearchComp from '../../ROOCommon/component/SearchComp.js';

const TAB_NORMAL_HOME = require('../images/home_ic_normal.png');
const TAB_NORMAL_CLASSIFY = require('../images/classify_ic_normal.png');
const TAB_NORMAL_COMMUNITY = require('../images/community_ic_normal.png');
const TAB_NORMAL_CART = require('../images/cart_ic_normal.png');
const TAB_NORMAL_MINE = require('../images/mine_ic_normal.png');

const TAB_PRESS_HOME=require('../images/home_ic_press.png');
const TAB_PRESS_CLASSIFY=require('../images/classify_ic_press.png');
const TAB_PRESS_COMMUNITY=require('../images/community_ic_press.png');
const TAB_PRESS_CART=require('../images/cart_ic_press.png');
const TAB_PRESS_MINE=require('../images/mine_ic_press.png');

class TabBar extends Component {
  constructor(){
    super();
    this.state={
      selectedTab:'Home',
    }
    this._showTabNavigatorItem = this._showTabNavigatorItem.bind(this);
  }

  /**
   tab点击方法
   **/
  onPress(tabName){
    if(tabName){
      this.setState(
          {
            selectedTab:tabName,
          }
      );
    }
  }
  /**
   渲染每项
   **/
  renderTabView(title,tabName,tabContent){
    var tabNomal;
    var tabPress;
    switch (tabName) {
      case 'Home':
        tabNomal=TAB_NORMAL_HOME;
        tabPress=TAB_PRESS_HOME;
        break;
      case 'Classify':
        tabNomal=TAB_NORMAL_CLASSIFY;
        tabPress=TAB_PRESS_CLASSIFY;
        break;
      case 'Community':
        tabNomal=TAB_NORMAL_COMMUNITY;
        tabPress=TAB_PRESS_COMMUNITY;
        break;
      case 'Cart':
        tabNomal=TAB_NORMAL_CART;
        tabPress=TAB_PRESS_CART;
        break;
      case 'Mine':
        tabNomal=TAB_NORMAL_MINE;
        tabPress=TAB_PRESS_MINE;
        break;
      default:

    }
    /*
    *renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}
     * */
    return(
        <TabNavigatorItem
            title={title}
            renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
            renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
            selected={this.state.selectedTab===tabName}
            selectedTitleStyle={{color:'#CF2146'}}
            onPress={()=>this.onPress(tabName)}>
            {this._showTabNavigatorItem(tabName)}
        </TabNavigatorItem>
    );
  }

  /**
   自定义tabbar
   **/
  tabBarView(){
    return (
        <TabNavigator
            tabBarStyle={styles.tab}>
          {this.renderTabView('首页','Home','首页',true)}
          {this.renderTabView('分类','Classify','母婴产品分类',false)}
          {this.renderTabView('奶爸圈','Community','奶爸社区',false)}
          {this.renderTabView('购物车','Cart','购物车',false)}
          {this.renderTabView('我的','Mine','个人中心',false)}
        </TabNavigator>
    );
  }

  /**
   * 点击tab展示对应页面
   * @returns {XML}
   */
  _showTabNavigatorItem(tabName){
    switch (tabName) {
      case 'Home':
        return(
            <HomePage />
        )
        break;
      case 'Classify':
        return(
            <ClassifyPage />
        )
        break;
      case 'Community':
        return(
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabName}</Text></View>
        )
        //return <CommunityPage />
        break;
      case 'Cart':
        return(
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabName}</Text></View>
        )
        //return <CartPage />
        break;
      case 'Mine':
        return <MinePage />
        break;
      default:
    }
  }

  render() {
    var tabBarView=this.tabBarView();
    return (
        <View style={styles.container}>
          {tabBarView}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab:{
    height: 50,
    alignItems:'center',
    backgroundColor:'#fff',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:3,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});
module.exports = TabBar;