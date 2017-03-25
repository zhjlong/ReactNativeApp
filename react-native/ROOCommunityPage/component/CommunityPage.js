/**
 * 奶爸社区模块
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

import ViewPager from 'react-native-viewpager';
const logo = require('../../ROOCommon/imgs/logo.jpeg');
const messageIcon = require('../../ROOCommon/imgs/message_icon.png');
const videosIcon = require('../images/video_icon.png');

const VerticalLine = require('../../ROOCommon/component/CommonElements.js').VerticalLine;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const SearchComp = require('../../ROOCommon/component/SearchComp').SearchComp;

const BANNER_IMGS = [
    require('../images/class1.jpeg'),
    require('../images/class2.jpeg'),
    require('../images/class3.jpeg'),
    require('../images/class4.jpeg'),
];

/**
 * 图文卡片组件
 */
class CardComponent extends Component {
    render() {
        return (
            <View style={[styles.container_card,{backgroundColor:this.props.bgcolor,}]}>
                <Text style={styles.text1}>{this.props.title}</Text>
                <Text style={styles.text2}>{this.props.details}</Text>
                <TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>
                        <Image style={{width:15,height:15,borderWidth:1,alignItems:'center'}} source={this.props.videosIcon}/>
                        <Text style={{marginLeft:5,fontSize:11}}>{this.props.times}</Text>
                        <View style={{flex:1}}/>
                        <Image style={styles.img} source={this.props.images}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
class CommunityComp extends Component {
    constructor(props){
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            selectCategoryIndex:0,
        }
    }
    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.community_bar}>
                    <View style={styles.logo}>
                        <Image style={{width:100,height:50}} source={logo}/>
                    </View>
                    <Text style={{fontSize:16}}>袋鼠小课堂</Text>
                    <View style={styles.publish_message}>
                        <TouchableOpacity onPress={() => {alert('Publish')}}>
                            <Image style={{width:26,height:26}} source={messageIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <HorizontalLine />
                <ScrollView>
                    <View>
                        <View style={{height:160}}>
                            <ViewPager
                                style={{height:160}}
                                dataSource={this.state.dataSource}
                                renderPage={this._renderPage}
                                isLoop={true}
                                autoPlay={true}/>
                        </View>
                        <View>
                            <View style={{height:60,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'#333333'}}>宝宝营养餐</Text>
                                <TouchableOpacity onPress={() => {alert('more')}}>
                                    <View>
                                        <Text style={{fontSize:11,marginTop:5}}>更多视频</Text>
                                        <View style={{height:1,width:45,backgroundColor:'#F0F0F0',marginTop:4}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.flexDirection_row,{marginBottom:5}]}>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="给宝宝做蔬果泥"
                                    bgcolor='#F9F4F8'
                                    images={messageIcon}
                                    videosIcon={videosIcon}
                                    times="03:36:00"/>
                                <View style={{width:2,backgroundColor:'#FFF'}}/>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="简单有营养的鸡蛋饼"
                                    bgcolor='#FFF5F4'
                                    images={messageIcon}
                                    videoIcon={videosIcon}
                                    times="03:36:00"/>
                            </View>
                            <View style={[styles.flexDirection_row,{marginBottom:5}]}>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="给宝宝做蔬果泥"
                                    bgcolor='#F9F4F8'
                                    images={messageIcon}
                                    videosIcon={videosIcon}
                                    times="03:36:00"/>
                                <View style={{width:2,backgroundColor:'#FFF'}}/>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="简单有营养的鸡蛋饼"
                                    bgcolor='#FFF5F4'
                                    images={messageIcon}
                                    videoIcon={videosIcon}
                                    times="03:36:00"/>
                            </View>
                            <View style={{height:60,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'#333333'}}>育儿小知识</Text>
                                <TouchableOpacity onPress={() => {alert('more')}}>
                                    <View>
                                        <Text style={{fontSize:11,marginTop:5}}>更多视频</Text>
                                        <View style={{height:1,width:45,backgroundColor:'#F0F0F0',marginTop:4}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.flexDirection_row,{marginBottom:5}]}>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="给宝宝做蔬果泥"
                                    bgcolor='#F9F4F8'
                                    images={messageIcon}
                                    videosIcon={videosIcon}
                                    times="03:36:00"/>
                                <View style={{width:2,backgroundColor:'#FFF'}}/>
                                <CardComponent
                                    title='袋鼠小课堂'
                                    details="简单有营养的鸡蛋饼"
                                    bgcolor='#FFF5F4'
                                    images={messageIcon}
                                    videoIcon={videosIcon}
                                    times="03:36:00"/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container_card:{
        flex: 1,
        paddingLeft:20,
        paddingRight:10,
        paddingTop:10,
    },
    community_bar:{
        height:50,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    },
    publish_message:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginRight:5,
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    page: {
        flex: 1,
        height: 160,
        resizeMode: 'stretch'
    },
    img:{
        width:58,
        height:58,
        marginTop:5,
    },
    text1:{
        fontSize:14,
    },
    text2:{
        fontSize:12,
        color:'#999',
        marginTop:5,
    },
});
module.exports = CommunityComp;
