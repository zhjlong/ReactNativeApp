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
    TouchableHighlight,
} from 'react-native';
import NetUtil from '../../ROOCommon/utils/NetUtil';
import Constants from '../data/Constants';
import ViewPager from 'react-native-viewpager';
const viewWidth = Dimensions.get('window').width;

const messageIcon = require('../../ROOCommon/imgs/message_icon.png');
const logo = require('../../ROOCommon/imgs/logo.jpeg');

const CardComp = require('./common/Components.js').CardComponent;
const NavigationBar = require('./NavigationBar.js').NavigationBar;
const ProductShowComp = require('./common/Components.js').ProductShowComp;
const SearchComp = require('../../ROOCommon/component/SearchComp.js').SearchComp;
const HorizontalLine = require('../../ROOCommon/component/CommonElements.js').HorizontalLine;
const MessagePage = require('../../ROOMinePage/component/MessagePage.js').MessagePage;

//url
const HOME_INFO_URL = Constants.HOME_INFO_URL;
const INTRO_INFO_URL = Constants.INTRO_INFO_URL;

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
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            homeInfo:[],
            PRODUCT_BANNERS:[]
        }
    }
    componentWillMount(){
        this._get_Home_Info();
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
                        <Image style={{width:110,height:50,marginLeft:5,marginBottom:5}} source={logo}/>
                        <SearchComp />
                        <TouchableOpacity onPress={() => {this._gotoPageByIndex('Message')}}>
                            <Image style={{width:25,height:25,marginRight:5}} source={messageIcon}/>
                        </TouchableOpacity>
                    </View>
                    <HorizontalLine />
                    <ScrollView keyboardShouldPersistTaps={true}>
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
                                <TouchableOpacity style={{flex:1}} onPress={() => {alert('品牌特卖专场')}}>
                                    <CardComp
                                        title='品牌特卖专场'
                                        details="清仓甩卖,限时抢购"
                                        bgcolor='#F9F4F8'
                                        images={messageIcon}/>
                                </TouchableOpacity>
                                <View style={{width:2,backgroundColor:'#FFF'}}/>
                                <TouchableOpacity style={{flex:1}} onPress={() => {alert('好货推荐')}}>
                                    <CardComp
                                        title='好货推荐'
                                        details="超高人气产品"
                                        bgcolor='#FFF5F4'
                                        images={messageIcon}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',height:60,backgroundColor:'#fff'}}>
                                <Text style={{color:'#333333'}}>精选活动 >></Text>
                                <View style={{height:1,width:28,backgroundColor:'#F0F0F0',marginTop:8}}/>
                            </View>
                            {this._renderActivityShow()}
                        </View>
                    </ScrollView>
                </View>

        );
    }
    //精选活动
    _renderActivityShow(){
        let activityRow;
        activityRow = this.state.homeInfo.map((data , ii) => {
            return this._renderProductItem(data,ii);
        });
        return activityRow;
    }
    //今日推荐
    _renderIntroShow(){
        let introRow;
        introRow = this.state.introInfo.map((data , ii) => {
            return this._renderIntroItem(data , ii);
        });
        return introRow;
    }
    _renderProductItem(data , ii ){
        let productList;
        productList = data.products.map((data , ii) => {
            if(ii >= 8) return;
            return this._renderProductList(data , ii);
        })
        return (
            <View key={ii} style={{marginBottom:10,width:viewWidth,backgroundColor:'#FFF5F4'}}>
                <Image style={{width:viewWidth,height:160}} source={{uri:data.bigImage}}/>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                            style={{backgroundColor:'#FFF'}}>
                    {productList}
                </ScrollView>
            </View>
        );
    }
    _renderProductList(data , ii){
        return (
            <ProductShowComp key={ii}
              image={data.img}
              details={data.detail}
              marketPrice={data.markeyPrice}
              memberPrice={data.memberPrice}/>
        );
    }
    _renderIntroItem(data ,ii){
        return (
            <Image />
        )
    }

    /**************页面跳转***************/
    _gotoPageByIndex(index){
        switch(index){
            case 'Message':
                this.props.navigator.push({
                    component:MessagePage,
                })
                break;
            default:
                break;
        }
    }
    /***************数据获取**************/
    _get_Intro_Info(){//获取今日推荐信息
        NetUtil.get(INTRO_INFO_URL, '').then((result) => {
            this.setState({
                homeInfo:result,
            });
        }, (err)=> {
            alert('获取信息失败');
        })
    }
    _get_Home_Info(){//获取精选活动信息
        NetUtil.get(HOME_INFO_URL, '').then((result) => {
            this.setState({
                homeInfo:result,
            });
        }, (err)=> {
            alert('获取信息失败');
        })
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