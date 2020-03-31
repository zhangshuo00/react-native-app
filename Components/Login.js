import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isLoading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        this.setState({isLoading:true})
        if(this.state.username != '' && this.state.pwd != ''){
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.result==='1'){
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.home();
                    })
                }else if(res.data.result === '2'){
                    Alert.alert('密码错误')
                }else{
                    Alert.alert('账户不存在')
                }
            })
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
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.login}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                    <View 
                        style={{
                            display:"flex",
                            flexDirection:"row",
                            marginTop:10
                        }}
                    >
                        <Text>还没有账号？</Text>
                        <TouchableOpacity onPress={()=>{Actions.register()}}>
                            <Text style={{color:'red'}}>注册</Text>
                        </TouchableOpacity>
                    </View>
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
