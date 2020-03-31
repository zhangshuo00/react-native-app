import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput,StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native'
import Prodescrip from './Prodescrip'

export default class ListSort extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#f4f4f4'}}>
                <View style={{marginTop:10,justifyContent:'center',flexDirection:'row',flexWrap:'wrap'}}>
                    <TextInput placeholder="请输入商品名称" style={styles.search}/>
                    <Icon style={{position:'absolute',right:50,top:8}} name="search"/>
                </View>
                <View style={{marginTop:15,marginBottom:10,justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
                    <Text style={{color:'red'}}>综合</Text>
                    <Text>销量</Text>
                    <Text>新品</Text>
                    <Text>价格</Text>
                    <Text>信用</Text>
                </View>
                <Prodescrip/>
                <Prodescrip/>
                <Prodescrip/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    search:{
      width:'85%',
      height:40,
      backgroundColor:'#eeeeee',
      borderRadius:10,
    },
});