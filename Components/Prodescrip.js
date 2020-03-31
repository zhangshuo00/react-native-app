import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class Prodescrip extends Component {
    render() {
        return (
            <View style={{marginBottom:5,marginTop:5,justifyContent:'space-around',flexDirection:'row'}}>
                <View style={styles.box}>
                    <View style={{height:200}}>
                        <Image style={{width:100,height:200,marginLeft:30}} resizeMode="contain" source={require('../chips_1.png')}/>
                    </View>
                    <Text style={styles.descrip}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.price}>36.00</Text>
                </View>
                <View style={styles.box}>
                    <View style={{height:200}}>
                        <Image style={{width:130,height:200,marginLeft:20}} resizeMode="contain" source={require('../chips_2.png')}/>
                    </View>
                    <Text style={styles.descrip}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.price}>36.00</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
      width:'45%',
      backgroundColor:'white'
    },
    descrip:{
      marginLeft:5,
      color:'#666666'
    },
    price:{
      marginTop:5,
      marginLeft:10,
      color:'#f23030'
    }
  });