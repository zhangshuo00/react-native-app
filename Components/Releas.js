import React, { Component, useEffect,useState } from 'react'
import { Text, View, FlatList, ToastAndroid, StyleSheet } from 'react-native'
import Button from 'react-native-button'

const Releas = () => {
    let [data, setData] = useState([]);
    let [limit,setLimit] = useState(10);
    let [page,setPage] = useState(1);
    let [disabled,setDisabled] = useState(false);
    let [dataNum,setDataNum] = useState(0)
    // let a = ['已回复','未回复']
    // let b = Math.round(Math.random().toFixed(1))
    useEffect(()=>{
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            let submin = [];
            for(let i=0,len=res.data.length;i<len;i+=limit){
                submin.push(res.data.slice(i,Math.min(i+limit,len)))
            }
            setData(submin)
            setDataNum(res.data.length)
            console.log(1)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const nextPage = ()=>{
        // 判断当前页是否为最后一页
        let pageNum = dataNum/limit + (dataNum%limit===0?0:1);
        // 是，禁用按钮
        // console.log(data.length%limit,data.length,limit)
        page === pageNum ? setDisabled(true) : setPage(++page);
        // 否则，更新状态，更新列表
    }
    const prevPage = ()=>{
        if(page === 1){
            ToastAndroid.show("这是第一页了！", ToastAndroid.SHORT)
        }else{
            setPage(--page)
        }
    }
    return (
        <View>
            <FlatList
                data={data[page-1]}
                renderItem={({item})=>(
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{width:'58%',marginLeft:10}}>{item.title.length>15?item.title.slice(0,14)+'...':item.title}</Text>
                        <Text>{item.create_at.slice(0,10)}</Text>
                        {
                            (item.create_at.substr(9,1)%2===0) ? (<Text style={{marginRight:10}}>已回复</Text>)
                            : (<Text style={{marginRight:10,color:'red'}}>未回复</Text>)
                        }
                        
                    </View>
                )}
            />
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                <Button style={styles.btn} onPress={()=>prevPage()}>上一页</Button>
                <Text>第{page}页</Text>
                <Button style={styles.btn} onPress={()=>nextPage()} disabled={disabled}>下一页</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        width:80,
        height:30,
        color:'white',
        borderRadius:15,
        backgroundColor:'red'
    }
})
export default Releas
