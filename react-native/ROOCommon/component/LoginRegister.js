/**
 * create by zhujianlong 2017.3.22
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
    Navigator,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
var { NativeModules } = require('react-native');
const Toast = NativeModules.ToastCustomAndroid;
import NetUtil from '../utils/NetUtil';
const Constants = require('../../ROOMinePage/constants/Constants.js');
const RegisterPage = require('./Register.js').RegisterPage;
const viewWidth = Dimensions.get('window').width;
const HorizontalLine = require('./CommonElements.js').HorizontalLine;

var backIcon = require('../imgs/back_icon.png');

//url
const LOGIN_URL = Constants.LOGIN_URL;

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this._pressBackButton = this._pressBackButton.bind(this);
        this._pressRegisterButton = this._pressRegisterButton.bind(this);
        this.state = {
            username: '',
            password: '',
        }
    }

    //返回键
    _pressBackButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    //跳转至注册页面
    _pressRegisterButton() {
        var _this = this;
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: RegisterPage,
                name: 'RegisterPage',
                params:{
                    getUser:function(username){
                        _this.setState({
                            username:username
                        })
                    }
                }
            });

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <TouchableOpacity onPress={this._pressBackButton}>
                        <Image style={{width:22,height:22,marginLeft:10}} source={backIcon}/>
                    </TouchableOpacity>
                    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                        <Text style={{alignItems:'center',fontSize:15}}>登录</Text>
                    </View>
                    <View style={{width:22,marginRight:10}}></View>
                </View>
                <HorizontalLine/>
                <View style={{marginTop:10,backgroundColor:'#FFF'}}>
                    <View style={styles.style_user}>
                        <View style={styles.style_tv}><Text>账户</Text></View>
                        <TextInput
                            style={styles.style_input}
                            placeholder= {this.state.username === '' ? 'QQ号/手机号/邮箱' : this.state.username}
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
                </View>
                <TouchableOpacity onPress={this._postLogin.bind(this)}>
                    <View style={styles.style_commit}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.style_find_psw}>找回密码</Text>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity onPress={this._pressRegisterButton}>
                        <Text style={[styles.style_find_psw,{marginRight:10}]}>注册新用户</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
                    <Text style={{fontSize:12}}>使用其它方式登录</Text>
                </View>
            </View>
        );
    }

    /**********************上传数据*********************/
    _postLogin() {
        let name = this.state.username;
        let password = this.state.password;
        let url = LOGIN_URL + '?name='+name+'&password='+password;
        NetUtil.post(url, '').then((result) => {
            switch (result.code){
                case 1:
                    const {navigator} = this.props;
                    InteractionManager.runAfterInteractions(() => {
                        if(this.props.getUserStatus) {
                            let user = result.username;
                            this.props.getUserStatus(user,true);
                        }
                        navigator.pop()
                    });
                    break;
                case 0:
                    Toast.show('登录失败,密码不正确',Toast.SHORT);
                    break;
                case -1:
                    Toast.show('用户名不存在',Toast.SHORT);
                    break;

            }
        }, (err)=> {
            alert('err' + JSON.stringify(err))
        })
    }

    //_get(){
    //    NetUtil.get(url , function(){
    //
    //    })
    //}

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
module.exports = {LoginPage};