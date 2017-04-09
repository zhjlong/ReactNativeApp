/**
 * create by zhujianlong 2017.3.22
 * 登录注册组件
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AppRegistry,
    StyleSheet,
    TextInput,
    Dimensions,
    Navigator,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
var { NativeModules } = require('react-native');
const Toast = NativeModules.ToastCustomAndroid;

const Constants = require('../../ROOMinePage/constants/Constants.js');
import NetUtil from '../utils/NetUtil';
const MinePage = require('../../ROOMinePage/component/MineLogin.js');
const viewWidth = Dimensions.get('window').width;
const HorizontalLine = require('./CommonElements.js').HorizontalLine;

var backIcon = require('../imgs/back_icon.png');

const REGISTER_URL = Constants.REGISTER_URL;

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this._pressBackButton = this._pressBackButton.bind(this);
        this._pressRegisterButton = this._pressRegisterButton.bind(this);
        this.state={
            username:'',
            password:'',
            confirmPassword:'',
        }
    }
    //返回键
    _pressBackButton(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }

    //跳转至注册页面
    _pressRegisterButton(){
    }

    render(){
        return(
           <View style={styles.container}>
               <View style={styles.title}>
                   <TouchableOpacity onPress={this._pressBackButton}>
                       <Image style={{width:22,height:22,marginLeft:10}} source={backIcon}/>
                   </TouchableOpacity>
                   <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                       <Text style={{alignItems:'center',fontSize:15}}>注册</Text>
                   </View>
                   <View style={{width:22,marginRight:10}}></View>
               </View>
               <HorizontalLine/>
               <View style={{marginTop:10,backgroundColor:'#FFF'}}>
                   <View style={styles.style_user}>
                       <View style={styles.style_tv}><Text>账户</Text></View>
                       <TextInput
                           style={styles.style_input}
                           placeholder='QQ号/手机号/邮箱'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           placeholderTextColor="#999999"
                           onChangeText={(username) => {this.setState({username:username})}}
                           value={this.state.username}
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
                           onChangeText={(password) => {this.setState({password:password})}}
                           value={this.state.password}
                       />
                   </View>
                   <HorizontalLine />
                   <View style={styles.style_psw}>
                       <View style={styles.style_tv}><Text>确认密码</Text></View>
                       <TextInput
                           style={styles.style_input}
                           placeholder='请输入密码'
                           numberOfLines={1}
                           autoFocus={true}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={true}
                           placeholderTextColor="#999999"
                           onChangeText={(confirmPassword) => {this.setState({confirmPassword:confirmPassword})}}
                           value={this.state.confirmPassword}
                       />
                   </View>
               </View>
               <TouchableOpacity onPress={this._postRegister.bind(this)}>
                   <View style={styles.style_commit}>
                       <Text style={{color:'#fff'}}>注册</Text>
                   </View>
               </TouchableOpacity>
           </View>
        );
    }

    /**********************上传数据*********************/
    _postRegister(){
        let name = this.state.username;
        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;
        let url = REGISTER_URL + '?name='+name+'&password='+password+'&confirmPassword='+confirmPassword;
        NetUtil.post(url, '').then((result) => {
            switch (result.code){
                case 1:
                    const {navigator} = this.props;
                    InteractionManager.runAfterInteractions(() => {
                        if(this.props.getUser) {
                            let user = result.username;
                            this.props.getUser(user);
                        }
                        navigator.pop()
                    });
                    Toast.show(result.message,Toast.SHORT);
                    break;
                default:
                    Toast.show(result.message,Toast.SHORT);
                    break;
            }
        }, (err)=> {
            alert('err' + JSON.stringify(err))
        })
    }
    /************************数据获取*************************/
    _get(){
        NetUtil.get(url , function(){

        })
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
        flex:2,
        marginLeft:15,
        marginRight:20,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    style_input:{
        flex:8,
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
module.exports = {RegisterPage};