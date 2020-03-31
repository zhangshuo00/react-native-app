import React, { Component } from 'react'
import { Text, View, FlatList, StatusBar } from 'react-native'

// let num: number = 100;
// let arr: string[] = ['aaa','bbb'];
// let obj: object = {name:'zhangsan'};
// enum Lev {one,two,three}

//接口
// interface Course{
//     title:string,
//     intro:string,
//     num?:number
// }
// interface User{
//     name:string,
//     age:number,
//     pwd:string
// }

// class User1 implements User{
//     name='zhangsan';
//     age=20;
//     pwd='zhangsan';
// }
// console.log(new User1())
// 接口继承类
// interface User2 extends User1{
//     work:string,
// }

// 接口在rn中的应用，可以规定属性或类的类型，以保证在更新状态时可以捕获非规定类型赋值的错误
// interface Props{
//     name:string;
//     data:{
//         id:string,
//         count:number
//     }
// }
// interface State{
//     num:number
// }
// export default class MyTs extends Component<Props,State> {
//     constructor(props:Props){
//         super(props);
//         this.state = {
//             num:111
//         }
//     }
//     componentDidMount(){
//         this.setState({num:999})
//     }
//     render() {
//         return (
//             <View>
//                 <Text> {this.props.name} </Text>
//             </View>
//         )
//     }
// }
// 泛型函数组件
// 在写列表等可复用的组件时可使用泛型函数组件，以支持从外部传入类型
// interface Props<T>{
//     content: T;
// }
// class Bar<T> extends Component<Props<T>> {
//     render(){
//         return (
//             <View>
//                 <Text>{this.props.content}</Text>
//             </View>
//         )
//     }
// }
// const App = () =>{
//     return(
//         <View>
//             <Bar content={10}></Bar>
//             <Bar<string> content={'zhangsan'}></Bar>
//         </View>
//     )
// }

// 装饰器给一个函数添加新的内容或逻辑，并返回
// 例如每个页面中都有状态栏，如果需要每个状态栏的背景颜色以及是否隐藏都不相同，可以使用装饰器
export const setStatusBar = (color:string,hidden:boolean) =>{
    return function(WrapComponent:any){
        return class extends Component{
            render(){
                return(
                    <View>
                        <StatusBar backgroundColor={color} hidden={hidden}/>
                        <WrapComponent/>
                    </View>
                )
            }
        }
    }
}
@setStatusBar('black',true)
export default class Home extends Component {
    render(){
        return (
            <View>
                <View>
                    <Text>内容</Text>
                </View>
            </View>
        )
    }
}