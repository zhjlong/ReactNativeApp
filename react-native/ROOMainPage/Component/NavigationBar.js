/**
 *create by zhujianlong 2017.3.23
 * 图文导航栏组件
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

const barData1 = [
    {'name':'婴儿奶粉' , 'img':require('../images/bar/bar1.jpg')},
    {'name':'纸尿裤'   , 'img':require('../images/bar/bar2.jpg')},
    {'name':'营养辅食' , 'img':require('../images/bar/bar3.jpg')},
    {'name':'喂养洗护' , 'img':require('../images/bar/bar4.jpeg')},
];
const barData2 = [
    {'name':'孕妈用品' , 'img':require('../images/bar/bar5.jpg')},
    {'name':'玩具图书' , 'img':require('../images/bar/bar6.jpg')},
    {'name':'家具出行' , 'img':require('../images/bar/bar7.jpeg')},
    {'name':'童装童鞋' , 'img':require('../images/bar/bar8.jpeg')},
];

class BarItems extends Component{
    render(){
        return(
            <View style={styles.bar}>
                <Image style={styles.img} source={this.props.image}/>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state={
            selectIndex:0,
        }
    }
    clickBar(string){
        alert(string);
    }
    /**
     * 导航栏
     */
    barRenderRow(barData1){
        var barDom = [];
        for (var i = 0 ; i < barData1.length ; i++){
            barDom.push(
                <TouchableOpacity activeOpacity={1} onPress={this.clickBar.bind(this,barData1[i].name)} key={i}>
                    <View key={i} >
                        <BarItems image={barData1[i].img} text={barData1[i].name}/>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            barDom
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.barRenderRow}>
                    {this.barRenderRow(barData1)}
                </View>
                <View style={[styles.barRenderRow,{marginTop:10}]}>
                    {this.barRenderRow(barData2)}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
    },
    bar:{
        justifyContent:'center',
        alignItems:'center',
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    img:{
        width:50,
        height:50,
        borderRadius:25,
    },
    text:{
        fontSize:12,
    },
    barRenderRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
module.exports = {NavigationBar};