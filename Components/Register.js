import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage,ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            pwdR:'',
            isLoading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    pwdRhandle = (text)=>{
        this.setState({pwdR:text})
    }
    register = ()=>{
        if(this.state.username != '' && this.state.pwd != '' && this.state.pwdR != ''){
            this.setState({isLoading:true})
            if(this.state.pwdR != this.state.pwd){
                Alert.alert('两次密码不一致')
            }else{
                myFetch.post('/register',{
                    username:this.state.username,
                    pwd:this.state.pwd,
                    pwdR:this.state.pwdR
                }).then(res=>{
                    // 根据返回状态进行判断，正确时跳转首页
                    if(res.data.result==='1'){
                        // AsyncStorage.setItem('user',JSON.stringify(res.data))
                        // .then(()=>{
                            this.setState({isloading:true})
                            Actions.login();
                            Alert.alert('注册成功')
                        // })
                    }else if(res.data.result === '2'){
                        Alert.alert('用户已存在')
                    }else{
                        Alert.alert('账户名无效')
                    }
                })
            }
        }else{
            Alert.alert('请输入用户名和密码')
        }
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
                <View style={{ alignItems: 'center'}}>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名为admin" 
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}
                    >
                        <Icon name="user" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}
                    >
                        <Icon name="user" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdRhandle}
                            placeholder="确认密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading ? 
                    (
                        <View style={{alignItems:'center'}}>
                            <ActivityIndicator size="large" color="red"/>
                            <Text>正在登录...</Text>
                        </View>
                    )
                    : null
                }
            </View>
        )
    }
}
