import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput,StyleSheet, Image, Dimensions, FlatList, Animated, TouchableOpacity, AsyncStorage, ToastAndroid, Alert } from 'react-native'
import { Icon } from '@ant-design/react-native'
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux'

const {swidth,sheight} = Dimensions.get('window')
const data = ['账户管理','收货地址','我的信息','我的订单','我的二维码','我的积分','我的收藏']
const data1 = ['居家维修保养','出行接送','我的受赠人','我的住宿优惠','我的活动','我的发布']
const options = {
    title: '设置头像',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};


export default class Personal extends Component {
    constructor(){
        super();
        this.state = {
            width:new Animated.Value(20),
            avatarSource: require('../assets/images/touxiang_03.jpg')
        }
    }
    takePhoto = async()=>{
        await ImagePicker.showImagePicker(options,async(response)=>{
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                await AsyncStorage.setItem('urlimg',JSON.stringify(source))
                this.setState({
                  avatarSource: source,
                });
            }
        })
    }
    exit = ()=>{
        AsyncStorage.removeItem('user',()=>{
            Actions.loginPage()
            
        })
    }
    componentDidMount = async()=>{
        await AsyncStorage.getItem('urlimg')===null ? this.setState({avatarSource:require('../assets/images/touxiang_03.jpg')}) : this.setState({avatarSource:JSON.parse(await AsyncStorage.getItem('urlimg'))});
    }
    render() {
        return (
            <ScrollView>
                <View style={{width:swidth,height:200,justifyContent:'center',alignItems:'center',backgroundColor:'#f23030'}}>
                    <TouchableOpacity onPress={()=>{this.takePhoto()}}>
                        <Image style={{width:60,height:60}} resizeMode="cover" source={this.state.avatarSource}/>
                    </TouchableOpacity>
                    <Text style={{color:'white',marginTop:20}}>BINNU DHILLON</Text>
                </View>
                <View style={{marginTop:2,backgroundColor:'white',flexDirection:'row'}}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={require('../assets/images/icon_07.jpg')}/>
                    <Text style={{marginLeft:20,marginTop:5}}>我的个人中心</Text>
                </View>
                <View>
                    <FlatList
                        data={data}
                        numColumns={3}
                        style={{marginTop:3}}
                        renderItem={({item})=>(
                            <View style={{width:'33%',height:100,backgroundColor:'white',alignItems:'center'}}>
                                <Image source={require('../assets/images/icon_07.jpg')}/>
                                <Text>{item}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{marginTop:2,backgroundColor:'white',flexDirection:'row'}}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={require('../assets/images/icon_07.jpg')}/>
                    <Text style={{marginLeft:20,marginTop:5}}>E族活动</Text>
                </View>
                <View>
                    <FlatList
                        data={data1}
                        numColumns={3}
                        style={{marginTop:3}}
                        renderItem={({item})=>(
                            <View style={{width:100,height:100,backgroundColor:'white',alignItems:'center',justifyContent:'space-around',flex:1}}>
                                <Image source={require('../assets/images/icon_07.jpg')}/>
                                {
                                    item === '我的发布' ? (<Text onPress={()=>Actions.two()}>{item}</Text>) : <Text>{item}</Text>
                                }
                            </View>
                        )}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                    <Text style={{color:'#a4a4a4'}}>BINNU DHILLON</Text>
                    <Text style={{marginLeft:5,marginRight:5,color:'#a4a4a4'}}>|</Text>
                    {/* <TouchableOpacity onPress={this.exit}> */}
                        <Text onPress={this.exit} style={{color:'black'}}>退出</Text>
                    {/* </TouchableOpacity> */}
                </View>
            </ScrollView>
        )
    }
}
