import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default class MyList extends Component {
    constructor(){
        super();
        this.state = {
            isDisplay :false,
            data:[1,2,3,4,5,6]
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isDisplay:true
            })
        }, 2000);
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {
                    this.state.isDisplay?(
                        this.state.data.map((item)=>{
                            <Text key={item}>{item}</Text>
                        })
                    ):<ActivityIndicator color="red" size="large"/>
                }
            </View>
        )
    }
}
