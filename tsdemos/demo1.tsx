import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 装饰器是一个函数，在函数里可以写一些新的逻辑
// 包裹后面修饰的内容，将新的逻辑传递到被修饰的内容中去
// 高阶组件--其实就是一个函数，就是装饰器

function helloWord(target: any) {
    console.log('hello Word!');
}
@helloWord
class HelloWordClass {

}

export default class demo1 extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
