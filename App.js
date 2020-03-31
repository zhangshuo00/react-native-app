/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
	StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import ListSort from './Components/ListSort'
import Service from './Components/Service';
import Center from './Components/Center';
import Login from './Components/Login'
import SwiperPage from './Components/SwiperPage'
import Personal from './Components/Personal'
import Releas from './Components/Releas'
import Register from './Components/Register';

console.disableYellowBox = true;


const App = () => {
	let [isLogin, setIsLogin] = useState(false);
	let [isInstall, setIsInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isInstall',res)
			if(res){
				setIsInstall(false)
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide()
			}
			if(user&&user.result){
				setIsLogin(true)
				SplashScreen.hide()
			}
		})
	}
	useEffect(() => {
		init()
	}, [])
	let afterInstall = ()=>{
		console.log('after install')
		setIsInstall(false)
	}
	if(isInstall){
		return (
			<View style={{flex:1}}>
				<SwiperPage afterInstall={afterInstall}/>
			</View>
		)
	}
	return (
		<Router
			backAndroidHandler={()=>{
				let cur = Actions.currentScene
				console.log(cur)
				switch(cur){
					case 'homes':
					case 'login':
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp()
						}else{
							ToastAndroid.show('确定要退出吗',100)
							now = new Date().getTime()
							return true
						}
						break;
					default:
						Actions.pop()
						break
				}
			}}
		>
			<Overlay>
				<Modal key="modal" hideNavBar>
					<Lightbox key="lightbox">
							<Scene key="root">
								<Tabs key="tabbar" hideNavBar>
									<Scene
										key="home"
										title="首页"
										icon={
											({focused})=><Icon color={focused?'red':''} name="home"/>
										}
										headerMode="none"
									>
										<Scene key="homes" component={Service}/>
									</Scene>
									<Scene
										key="sort"
										title="分类"
										icon={
											({focused})=><Icon color={focused?'red':''} name="file"/>
										}
										headerMode="none"
									>
										<Scene key="sorts" component={ListSort}/>
									</Scene>
									<Scene
										key="personal"
										// hideDrawerButton
										// component={Center}
										title="个人中心"
										icon={
											({focused})=><Icon color={focused?'red':''} name="user"/>
										}
										
									>
										<Scene
											key="one"
											component={Personal}
											initial={true}
											hideNavBar
											headerMode="none"
										/>
										<Scene
											key="two"
											component={Releas}
											title="我的发布"
											navigationBarStyle={{backgroundColor:'red'}}
											titleStyle={{flex:1,textAlign:'center',color:'white'}} 
											renderRightButton={<View></View>} 
											navBarButtonColor="white"
											headerMode="screen"
										/>
									</Scene>
								</Tabs>
							</Scene>
					</Lightbox>
					{/* <Scene initial={!isLogin} key="login" component={Login} /> */}
					<Scene
						initial={!isLogin}
						key="loginPage"
					>
						<Scene
							initial={true}
							key="login"
							component={Login}
							hideNavBar
						/>
						<Scene 
							key="register" 
							component={Register}
							title="注册"
							navigationBarStyle={{backgroundColor:'red'}}
							titleStyle={{flex:1,textAlign:'center',color:'white'}} 
							renderRightButton={<View></View>} 
							navBarButtonColor="white"
						/>
					</Scene>
				</Modal>
			</Overlay>
		</Router>
	);
};


export default App;
