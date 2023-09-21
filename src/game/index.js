import React, { Component, useState, useEffect, useRef } from "react";
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList
} from "react-native";
import { createContext, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import ITemCinema from '../itemcinema';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      rank:1,
      stt:1
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      rank:2,
      stt:2
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      rank:3,
      stt:3
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29a73',
        title: 'Third Item',
        stt:4
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29f74',
        title: 'Third Item',
        stt:5
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29s75',
        title: 'Third Item',
        stt:6
      },
  ];
  const Item = ({title,rank,stt}) => (
    <View style={{width: '100%',height:40, flexDirection:'row',backgroundColor:(stt%2==0?'#C4C4C41A':'#3C3C3C3C'), alignItems:'center'}}>
        <Text style={{marginRight: 10,}}>{rank}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
export default Game = ({navigation,route}) =>{
    const [rank,setRank] = useState(true)
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{width: '100%',}}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', height:84, paddingTop:40,backgroundColor:'red', justifyContent:'space-between', alignItems:'center'}}> 
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image
                        source={require("../img/Home/Back.png")}
                        style={{ width: 6, height: 12, marginLeft:10,marginRight:10, }}
                        />
                        </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center'}}>
                            <Text style={{fontSize: 17,lineHeight:22,fontWeight:'700',color:'#fff'}}>iTel Game</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image
                        source={require("../img/Home/Menu (1).png")}
                        style={{ width: 6, height: 12, marginLeft:10,marginRight:10, }}
                        />
                        </TouchableOpacity>
                </View>
                <ScrollView style={styles.banner} horizontal>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('InfoGame')
                    }} style={{alignItems:'center', justifyContent:'center'}}>
                    <Image
                        source={require("../img/Game/banner.png") }
                        style={{height: 166,width: 303,marginRight:16,}}
                    />
                    <View style={{position:'absolute', width:'80%', height:'80%', justifyContent:'space-between'}}>
                        <Text style={{color:'#fff'}}>HOT GAME</Text>
                        <View style={{justifyContent:'flex-end'}}>
                            <Text style={{color:'#fff', fontSize:24, fontWeight:'700'}}>Game poker</Text>
                            <Text style={{color:'#fff'}}>Ed Sheeran & Bieber's</Text>
                        </View>
                        
                    </View>
                    </TouchableOpacity>
                    <Image
                        source={require("../img/Game/banner.png") }
                        style={{height: 166,width: 303,}}
                    />
                </ScrollView>

                <View style={{width:'90%', marginTop: 13,alignItems:'center'}}>
                    <View style={{width: '100%',backgroundColor:'#41D3CF', flexDirection:'row', alignItems:'center', borderRadius:10}}>
                        <View style={{ marginTop:23,marginLeft: 23,}}>
                            <Text style={{color:'#fff', fontWeight:'700', fontSize:24}}> Game Tuần</Text>
                            <Text style={{color:'#fff', fontSize:16, marginBottom: 16,}}>Còn lại 8 tuần</Text>

                            <Text style={{color:'#fff'}}>Kỷ lục của bạn</Text>
                            <Text style={{color:'#fff', fontSize:18, fontWeight:'700'}}>2,424 điểm</Text>

                            <TouchableOpacity style={{marginTop:16,width: 135,height: 31,borderColor:'#fff', borderWidth:2, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:27, marginBottom:20}}>
                                <Text style={{color:'#fff', marginRight:5,fontWeight:'700'}}>Bảng xếp hạng</Text>
                                <Image source={require("../img/Home/more.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{height: '100%'}}>
                            <Image source={require("../img/Home/game/week.png")}  style={{width: 230,height: 230}}/>
                        </View>
                    </View>

                    <View style={{width:'100%',marginTop:26 ,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{fontSize:20, fontWeight:'700'}}>Bảng xếp hạng</Text>
                            <TouchableOpacity onPress={()=>{
                                (!rank?setRank(true):setRank(false))
                                console.log(rank)
                            }}>
                                <Text>Thu Gọn</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={DATA}
                            renderItem={({item}) => <Item title={item.title} rank={item.rank} stt={item.stt}/>}
                            keyExtractor={item => item.id}
                            style={{height:(rank?240:0), marginBottom:40,}}
                        />
                        
                        <View style={{width: '100%',backgroundColor:'#6987FF', flexDirection:'row', alignItems:'center', borderRadius:10}}>
                        <View style={{ marginTop:23,marginLeft: 23,}}>
                            <Text style={{color:'#fff', fontWeight:'700', fontSize:24}}> Game Tuần</Text>
                            <Text style={{color:'#fff', fontSize:16, marginBottom: 16,}}>Còn lại 8 tuần</Text>

                            <Text style={{color:'#fff'}}>Kỷ lục của bạn</Text>
                            <Text style={{color:'#fff', fontSize:18, fontWeight:'700'}}>2,424 điểm</Text>

                            <TouchableOpacity style={{marginTop:16,width: 135,height: 31,borderColor:'#fff', borderWidth:2, flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:27, marginBottom:20}}>
                                <Text style={{color:'#fff', marginRight:5,fontWeight:'700'}}>Bảng xếp hạng</Text>
                                <Image source={require("../img/Home/more.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{height: '100%'}}>
                            <Image source={require("../img/Home/game/avatargame.png")}  style={{width: 200,height: 200}}/>
                        </View>
                        </View>

                        <View style={{marginTop: 27,}}>
                            <Text style={{fontSize:20, fontWeight:'700'}}>Mới cập nhật</Text>
                            <ScrollView horizontal>
                                <ITemCinema />
                            </ScrollView>
                        </View>

                        <View style={{marginTop: 27, marginBottom:30,}}>
                            <Text style={{fontSize:20, fontWeight:'700'}}>Tổng hợp</Text>
                            <ScrollView horizontal style={{width:'100%'}}>
                                <ITemCinema />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
banner:{
    marginTop:18,
    marginLeft: 16,
},
title:{
    fontSize:14,
}
})