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
    ScrollView,
    TouchableOpacity,
} from 'react-native';
//import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewPager from 'react-native-viewpager';
const viewWidth = Dimensions.get('window').width;

const messageIcon = require('../../ROOCommon/imgs/message_icon.png');
const logo = require('../../ROOCommon/imgs/logo.jpeg');

const CardComp = require('./common/Components.js').CardComponent;
const NavigationBar = require('./NavigationBar.js').NavigationBar;
const ProductShowComp = require('./common/Components.js').ProductShowComp;
const SearchComp = require('../../ROOCommon/component/SearchComp.js').SearchComp;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;

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
                        <Image style={{width:100,height:50,marginLeft:5,marginBottom:5}} source={logo}/>
                        <SearchComp />
                        <TouchableOpacity onPress={() => alert('message')}>
                            <Image style={{width:25,height:25,marginRight:5}} source={messageIcon}/>
                        </TouchableOpacity>
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
                            <NavigationBar />
                            <View style={styles.flexDirection_row}>
                                <CardComp
                                    title='品牌特卖专场'
                                    details="清仓甩卖,限时抢购"
                                    bgcolor='#F9F4F8'
                                    images={messageIcon}/>
                                <View style={{width:2,backgroundColor:'#FFF'}}/>
                                <CardComp
                                    title='好货推荐'
                                    details="超高人气产品"
                                    bgcolor='#FFF5F4'
                                    images={messageIcon}/>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',height:60,backgroundColor:'#fff'}}>
                                <Text style={{color:'#333333'}}>精选活动 >></Text>
                                <View style={{height:1,width:28,backgroundColor:'#F0F0F0',marginTop:8}}/>
                            </View>
                            <View style={{width:viewWidth,height:140,backgroundColor:'#FFF5F4'}}></View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                        style={{backgroundColor:'#FFF'}}>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                            </ScrollView>
                            <View style={{marginTop:10,width:viewWidth,height:140,backgroundColor:'#FFF5F4'}}></View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                                        style={{backgroundColor:'#FFF'}}>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                                <ProductShowComp image={messageIcon}/>
                            </ScrollView>

                        </View>
                    </ScrollView>
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
        height: 160,
        resizeMode: 'stretch'
    },
});
module.exports = HomePage;