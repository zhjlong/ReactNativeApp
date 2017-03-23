/**
 *create by zhujianlong 2017.3.22
 * 登录注册组件
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
} from 'react-native';
const viewWidth = Dimensions.get('window').width;
const HorizontalLine = require('./CommonElements.js').HorizontalLine;

var backIcon = require('../imgs/back_icon.png');

class LoginRegisterComp extends Component{

    render(){
        return(
           <View style={styles.container}>
               <View style={styles.title}>
                   <Text style={{alignItems:'center',fontSize:16}}>登录</Text>
               </View>
               <Image style={{width:22,height:22,absolute:'relative',left:10,top:-31}} source={backIcon}></Image>
               <View style={{marginTop:-10,backgroundColor:'#FFF'}}>
                   <View style={styles.style_user}>
                       <View style={styles.style_tv}><Text>账户</Text></View>
                       <TextInput
                           style={styles.style_input}
                           placeholder='QQ号/手机号/邮箱'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           placeholderTextColor="#999999"
                       />
                   </View>
                   <HorizontalLine />
                   <View style={styles.style_psw}>
                       <View style={styles.style_tv}><Text>密码</Text></View>
                       <TextInput
                           style={styles.style_input}
                           placeholder='请输入密码'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={true}
                           placeholderTextColor="#999999"
                       />
                   </View>
               </View>
               <View style={styles.style_commit}>
                   <Text style={{color:'#fff'}}>
                       登录
                   </Text>
               </View>
               <View style={{flexDirection:'row'}}>
                   <Text style={styles.style_find_psw}>找回密码</Text>
                   <View style={{flex:1}}></View>
                   <Text style={[styles.style_find_psw,{marginRight:10}]}>注册账户</Text>
               </View>
               <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
                   <Text>使用其它方式登录</Text>
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F0F0F0',
    },
    title:{
        width:viewWidth,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    style_user:{
        flexDirection:'row',
    },
    style_tv:{
        marginLeft:15,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center',
    },
    style_input:{
        flex:1,
        fontSize:13,
    },
    style_psw:{
        flexDirection:'row',
    },
    style_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#CF2146',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_find_psw:{
        marginLeft:10,
        marginTop:5,
        fontSize:12,
    }
});
module.exports = {LoginRegisterComp};