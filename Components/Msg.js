import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Msg extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <View>
                <Button title="跳转到消息详情页面" onPress={()=>Actions.msgdetails({id:100})}/>
                <Button title="消息数+1" onPress={()=>this.setState({count:++this.state.count})}/>
                <Text>消息数：{this.state.count}</Text>
                <Button
                    title='打开lightbox'
                    onPress={()=>Actions.light()}
                />
                <Button 
                title='登录' 
                onPress={()=>Actions.login()}
                />
                <Button 
                    title='Login1' 
                    onPress={()=>Actions.login1()}
                />
                <Button 
                    title='跳到文档页' 
                    onPress={()=>Actions.doc()}
                />
            </View>
        );
    }
};