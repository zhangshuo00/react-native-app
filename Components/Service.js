import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput,StyleSheet, Image, Dimensions } from 'react-native'
import { Icon } from '@ant-design/react-native'
import Swiper from 'react-native-swiper'

const {swidth,sheight} = Dimensions.get('window')

export default class Service extends Component {
    constructor(){
        super();
        this.state = {
            data:[
                {title:'居家维修保养',img:{uri:'https://i.loli.net/2020/03/12/NuVSjta4pWfcsTO.jpg'}},
                {title:'住宿优惠',img:{uri:'https://i.loli.net/2020/03/12/M7qFWBNzp6ySjXd.jpg'}},
                {title:'出行接送',img:{uri:'https://i.loli.net/2020/03/12/pI8yLZhU4nmEH7Q.jpg'}},
                {title:'E族活动',img:{uri:'https://i.loli.net/2020/03/12/FIe4D1fiaBd6osW.jpg'}}
            ],
        }
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#f4f4f4'}}>
                <View style={styles1.head}>
                    <TextInput placeholder="请输入您要搜索的关键字" style={styles1.search}/>
                    <Icon style={{position:'absolute',right:45,top:12}} name="search"/>
                </View>
                <Swiper
                    showsPagination={true}
                    activeDotColor='red'
                    loop={true}
                    autoplay={true}
                    horizontal={true}
                    style={{height:200}}
                >
                    <View style={{flex:1}}>
                        <Image style={{width:swidth,height:200}} resizeMode='cover' source={require('../assets/images/banner1_02.jpg')}/>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:swidth,height:200}} resizeMode='cover' source={require('../assets/images/banner2_02.jpg')}/>
                    </View>
                </Swiper>
                <View>
                    {
                        this.state.data.map((item)=>(
                            <View style={{width:swidth,height:60,backgroundColor:'white',marginTop:10,marginBottom:10,marginLeft:5,justifyContent:'flex-start',flexDirection:'row'}}>
                                <Image style={{width:60,height:60}} resizeMode="cover" source={item.img}/>
                                <Text style={{marginLeft:25,marginTop:15,fontSize:18}}>{item.title}</Text>
                                <Image style={{position:'absolute',right:20,top:20}} source={require('../assets/images/right_03.jpg')}/>
                            </View>
                        ))
                    }
                </View>
                
            </ScrollView>
        )
    }
}
const styles1 = StyleSheet.create({
    head:{
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#f23030'
    },
    search:{
        width:'85%',
        height:40,
        marginTop:5,
        backgroundColor:'#eeeeee',
        borderRadius:10,
    },
});

