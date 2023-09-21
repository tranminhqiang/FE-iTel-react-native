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
export default InfoGame = ({navigation,route}) =>{
    const [click,setClick] = useState(0)
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
            <View style={styles.header}> 
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image
                        source={require("../img/Home/Back.png")}
                        style={{ width: 6, height: 12, marginLeft:10,marginRight:10, }}
                        />
                        </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center'}}>
                            <Text style={{fontSize: 17,lineHeight:22,fontWeight:'700',color:'#fff'}}>Chi tiết game</Text>
                    </View>
                    <TouchableOpacity >
                        <Image
                        source={require("../img/Home/Menu (1).png")}
                        style={{ width: 6, height: 12, marginLeft:10,marginRight:10, }}
                        />
                        </TouchableOpacity>
            </View>
            <View style={{width: '90%',alignItems:'center'}}>
                <Image source={require('../img/Game/banner.png')} style={{width: '100%',height: 163,marginTop:17, borderRadius:10}} />
                <Text style={{fontSize:20, fontWeight:'700', marginTop:17,width:'100%',}}>Game đập trứng không gian</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                {click==0?<TouchableOpacity style={{width: '50%',}}>
                    <Text style={{fontWeight:'700', textAlign:'center'}}>Giới thiệu chung</Text>
                    <View style={{height: 3,backgroundColor:'red'}}></View>
                </TouchableOpacity>:<TouchableOpacity onPress={() =>{
                    setClick(0)
                }} style={{width: '50%',}}>
                    <Text style={{color:'#3333', textAlign:'center'}}>Giới thiệu chung</Text>
                    <View style={{height: 3,backgroundColor:'#3333'}}></View>
                </TouchableOpacity>}
                {click==1?<TouchableOpacity style={{width: '50%',}}>
                    <Text style={{fontWeight:'700', textAlign:'center'}}>Cách tính điểm thưởng</Text>
                    <View style={{height: 3,backgroundColor:'red'}}></View>
                </TouchableOpacity>:<TouchableOpacity onPress={() =>{
                    setClick(1)
                }} style={{width: '50%',}}>
                    <Text style={{color:'#3333', textAlign:'center'}}>Cách tính điểm thưởng</Text>
                    <View style={{height: 3,backgroundColor:'#3333'}}></View>
                </TouchableOpacity>}
            </View>
            <View>
                {click==0?<View style={{width: '85%',}}><Text style={{lineHeight:22, fontSize:16, color:'red'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</Text></View>:<View style={{width: '85%'}}><Text style={{lineHeight:22, fontSize:16}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 

Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</Text></View>}
            </View>
            <TouchableOpacity style={{width: '80%',marginTop:25,backgroundColor:'rgba(237, 31, 36, 1)', borderRadius:27, height: 48,justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:'600', color:'#fff', fontSize:18}}>Chơi ngay</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems:'center'
    },
    header:
    {flexDirection:'row', height:84, paddingTop:40,backgroundColor:'red', justifyContent:'space-between', alignItems:'center'}
})