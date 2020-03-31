import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Router, Scene} from "react-native-router-flux"
import Personal from './Personal'
import Releas from './Releas'

export default class Center extends Component {
    render() {
        return (
            <Router>
                <Scene key="center">
                    <Scene
                        key="one"
                        component={Personal}
                        initial={true}
                        hideNavBar
                    />
                    <Scene
                        key="two"
                        component={Releas}
                        title="我的发布"
                        navigationBarStyle={{backgroundColor:'red'}}
                        titleStyle={{flex:1,textAlign:'center',color:'white'}} 
                        renderRightButton={<View></View>} 
                        navBarButtonColor="white"
                    />
                </Scene>
            </Router>
        )
    }
}
