/**
 *create by zhujianlong 2017.4.6
 * 产品详情页
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
import ViewPager from 'react-native-viewpager';
//const searchIcon = require('../imgs/search_icon.png');
const collectIcon = require('../imgs/collect_button_icon.png');
const cartIcon = require('../imgs/cart_button_icon.png');
const backIcon = require('../imgs/back_icon.png');
const shareIcon = require('../imgs/share_icon.png');

const viewWidth = Dimensions.get('window').width;
const GreaterThanSignComp2 = require('./CommonElements.js').GreaterThanSignComp2;
const HorizontalLine = require('./CommonElements.js').HorizontalLine;
const VerticalLine = require('./CommonElements.js').VerticalLine;
const TopBarView = require('./CommonElements.js').TopBarView;

const BANNER_IMGS = [
    require('../../ROOMainPage/images/banner/banner1.jpeg'),
    require('../../ROOMainPage/images/banner/banner2.jpg'),
    require('../../ROOMainPage/images/banner/banner3.jpeg'),
];

class ProductsDetailPage extends Component{
    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged:(p1,p2) => p1 !== p2
        })
        this.state = {
            dataSource : dataSource.cloneWithPages(BANNER_IMGS)
        }
        this._pressBackButton = this._pressBackButton.bind(this);
    }

    //返回键
    _pressBackButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    _renderPage(data){
        return (
            <Image
                source={data}
                style={styles.page}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <TopBarView
                    _title = "商品详情"
                    back_icon = {backIcon}
                    operate_icon = {shareIcon}
                    _press_back = {this._pressBackButton}
                    _press_operate_icon = {this._pressBackButton}/>
                <HorizontalLine/>
                <ScrollView style={{flex:1}}>
                    <View style={{flex:1}}>
                        <ViewPager
                            style={{height:220}}
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            isLoop={true}
                            autoPlay={false}/>
                        <View style={{height:50,flexDirection:'row',alignItems:'center',backgroundColor:'#fff'}}>
                            <Text style={{color:'#E01A3B',fontSize:14,marginLeft:15,marginTop:6}}>¥</Text>
                            <Text style={{color:'#E01A3B',fontSize:26}}>999</Text>
                            <View style={{marginLeft:5}}>
                                <Text>¥1999</Text>
                                <View style={{width:40,height:1,backgroundColor:'#E01A3B',marginTop:-9}}></View>
                            </View>
                            <View style={{width:40,height:20,backgroundColor:'#FB8589',alignItems:'center',borderRadius:3,marginLeft:10}}>
                                <Text style={{color:'#fff'}}>包邮</Text>
                            </View>
                            <View style={{width:40,height:20,backgroundColor:'#FB8589',alignItems:'center',borderRadius:3,marginLeft:10}}>
                                <Text style={{color:'#fff'}}>特价</Text>
                            </View>
                        </View>
                        {this._line()}
                        <View style={{padding:15,backgroundColor:'#fff'}}>
                            <Text numberOfLines={2} style={{fontSize:14,lineHeight:20}}>6件装|Nutrilon荷兰牛栏 婴儿奶粉1段 0-6个月 850克/罐 6罐装</Text>
                            <Text style={{marginTop:6,fontSize:12,lineHeight:20}}>
                                #万千妈妈口碑之选# 荷兰原装进口,优选荷兰黄金奶源,欧盟严格生产标准,
                                欧洲专利益生元组合.将来的茁壮成长,从最初的正确喂养开始!适合0-6个月宝宝,只给宝宝优秀的~
                            </Text>
                        </View>
                        <View style={{marginTop:10,backgroundColor:'#fff'}}>
                            <GreaterThanSignComp2 typeText="产品参数"/>
                            <HorizontalLine/>
                            <GreaterThanSignComp2 typeText="说明:" explainText="说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明"/>
                            <HorizontalLine/>
                        </View>
                        <View style={styles.estimated}>
                            <View style={styles.estimated_title}>
                                <Text style={{fontSize:12}}> --- 评价 ---</Text>
                            </View>
                            <View style={{padding:15,backgroundColor:'#fff'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={{width:24,height:24,borderRadius:12}} source={collectIcon}/>
                                    <Text style={{fontSize:12,marginLeft:5}}>zhujianlong</Text>
                                </View>
                                <Text numberOfLines={2} style={{fontSize:13,lineHeight:20,marginTop:5}}>
                                    用了一个多礼拜了,感觉很好,很流畅,运行很快,可以保留后台,而且加了很多更人性化的设计,总之就是很好,好的没话说
                                </Text>
                                <Text style={{marginTop:5,fontSize:12,lineHeight:20,color:'#999999'}}>
                                    网络类型:全网通;机身颜色:亮黑色
                                </Text>
                            </View>
                            <TouchableHighlight>
                                <View style={styles.estimated_btn}>
                                    <Text style={{}}>查看全部评论</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <HorizontalLine/>
                    </View>
                </ScrollView>
                <HorizontalLine/>
                <View style={styles.account}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight style={{flex:1}} >
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image style={{width:22,height:22}} source={collectIcon}/>
                                <Text style={{fontSize:11}}>收藏</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{width:1,height:50,backgroundColor:'#F0F0F0'}}/>
                        <TouchableHighlight style={{flex:1}} >
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image style={{width:22,height:22}} source={cartIcon}>
                                    <View style={styles.cartNum} >
                                        <Text style={{fontSize:10}}>0</Text>
                                    </View>
                                </Image>
                                <Text style={{fontSize:11}}>购物车</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={{flex:1}} >
                        <View style={{height:50,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FD8689'}}>
                            <Text style={{color:'#fff'}}>加入购物车</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex:1}} onPress={()=>{alert('立即抢购')}}>
                        <View style={{height:50,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E01A3B'}}>
                            <Text style={{color:'#fff'}}>立即抢购</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
    _line(){
        return (
            <View style={{width:viewWidth-30,height:1,marginLeft:15,marginRight:15}}></View>
        );
    }
    /************获取数据**************/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        height: 220,
        resizeMode: 'stretch'
    },
    account:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
    },
    cartNum:{
        width:12,
        height:12,
        borderWidth:1,
        marginLeft:20,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center'
    },
    estimated:{
        paddingBottom:20,
        alignItems:'center',
        backgroundColor:'#fff',
        justifyContent:'center',

    },
    estimated_title:{
        width:viewWidth,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F0F0F0'
    },
    estimated_btn: {
        marginTop: 20,
        width: 120,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E01A3B',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    }
});
module.exports = ProductsDetailPage;