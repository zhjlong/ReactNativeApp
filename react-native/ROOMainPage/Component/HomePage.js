/**
 *create by zhujianlong 2017.3.22
 * 搜索组件
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
    TouchableOpacity,
} from 'react-native';
//import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewPager from 'react-native-viewpager';

const messageIcon = require('../../ROOCommon/imgs/message_icon.png');
const viewWidth = Dimensions.get('window').width;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const SearchComp = require('../../ROOCommon/component/SearchComp.js').SearchComp;

const BANNER_IMGS = [
    require('../images/banner/banner1.jpeg'),
    require('../images/banner/banner2.jpg'),
    require('../images/banner/banner3.jpeg'),
];
class HomePage extends Component{
    constructor(props){
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.flexDirection_row,styles.bar]}>
                    <SearchComp />
                    <Image style={{width:25,height:25,marginRight:5}} source={messageIcon}/>
                </View>
                <HorizontalLine />
                <View style={{height:130}}>
                    <ViewPager
                        style={{height:130}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar:{
        width:viewWidth,
        height:50,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
    },
    flexDirection_row:{
        flexDirection:'row',
    },
    img:{
        width:18,
        height:18,
    },
    text:{
        fontSize:12,
    },
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});
module.exports = HomePage;