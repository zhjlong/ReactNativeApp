/**
 * 商品分类模块
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
const logo = require('../../ROOCommon/imgs/logo.jpeg');
const messageIcon = require('../../ROOCommon/imgs/message_icon.png');

const leftData = require('./../data/leftCategoryData');
const rightData = require('./../data/rightData');
const VerticalLine = require('../../ROOCommon/component/CommonElements.js').VerticalLine;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;

const SearchComp = require('../../ROOCommon/component/SearchComp').SearchComp;
class CategoryComp extends Component {
    constructor(props){
        super(props);
        this.state={
            selectCategoryIndex:0,
        }
    }
    clickCategory(index){
        //NativeModules.Log.d("TAG","111");
        this.setState({
            selectCategoryIndex:index
        });
    }

    /**
     * 左边导航
     */
    leftRenderRow(){
        var leftDom = [];
        for (var i = 0 ; i < leftData.length ; i++){
            leftDom.push(
                <TouchableOpacity activeOpacity={1} onPress={this.clickCategory.bind(this,i)} key={i}>
                    <View key={i} style={styles.leftRenderRow}>
                        <Text >{leftData[i]}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (leftDom);
    }
    /**
     * 右边导航--一行三条数据
     */
    rightRenderRowItem(index){
        var rowItemDom = [];
        for (var i = 0 ; i < rightData[this.state.selectCategoryIndex][index].length ; i++){
            rowItemDom.push(
                <View key={i} style={{align:'center'}}>
                    <Image source={{uri: rightData[this.state.selectCategoryIndex][index][i].img}}
                           style={{width: 40, height: 60}} resizeMode={'cover'}></Image>
                    <Text style={{marginTop:10,fontSize:13,textAlign:'center'}}>
                        {rightData[this.state.selectCategoryIndex][index][i].name}
                    </Text>
                </View>
            )
        }
        return (
            rowItemDom
        );
    }
    /**
     * 右边导航
     */
    rightRenderRow(){
        var rightDom = [];
        for (var i = 0 ; i < rightData[this.state.selectCategoryIndex].length ; i++){
            rightDom.push(
                <View style={styles.rightRender}>
                    {this.rightRenderRowItem(i)}
                </View>
            )
        }
        return (
            rightDom
        );
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={[styles.flexDirection_row,styles.bar]}>
                    <Image style={{width:110,height:50,marginLeft:5,marginBottom:5}} source={logo}/>
                    <SearchComp />
                    <TouchableOpacity onPress={() => alert('message')}>
                        <Image style={{width:25,height:25,marginRight:5}} source={messageIcon}/>
                    </TouchableOpacity>
                </View>
                <HorizontalLine />
                <View style={styles.container}>
                    <View style={styles.left}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.leftRenderRow()}
                        </ScrollView>
                    </View>
                    <VerticalLine color='#757575'/>
                    <View style={styles.right}>
                        <ScrollView showVerticalScrollIndicator={false}>
                            {this.rightRenderRow()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
    },
    bar:{
        height:50,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    leftRenderRow:{
        height:50,
        fontSize:13,
        justifyContent:'center',
        alignItems:'center',
    },
    rightRender:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30,
    },
    left:{
        flex:2,
    },
    right:{
        flex:6,
    },
    itemImg:{
        width:50,
        height:70,
    }
});
module.exports = CategoryComp;
