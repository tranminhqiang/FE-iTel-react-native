import React, { Component, useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableOpacity
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  const ThemeContext = createContext(null);
  import { createContext, useContext } from "react";
export default ItemData=({ children })=> {
    const [cancer1,setCancer1] = useState('relative')
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{width:'100%'}}>
                
            <View style={styles.container}>
                <View style={{width:'90%', alignItems:'center', height:'100%', justifyContent:'space-between', flexDirection:'row'}}>
                <View style={{width: 90,height: 163, justifyContent:'center', alignItems:'center'}}>
                    <LinearGradient
            // Background Linear Gradient
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            colors={['#FF5647', '#D270F9']}
            style={styles.background}
        />
                    <Text style={{fontWeight:'900',fontSize:24,fontStyle:'italic',color:'#fff',width: '50%',}}>Gói D20</Text>
                </View>
                <View style={{width:'65%',height:163,justifyContent:'space-between'}}>
                    <Text style={{}}>
                        3GB data / ngày 
                    </Text>
                    <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'space-between',}}>
                        <Image source={require('../img/Home/tick.png')} style={{width: 16,height: 16,}}/>
                        <Text style={{fontSize:12, width:'90%'}}>Lorem ipsum dolor sit amet, consec dolum</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'space-between',}}>
                        <Image source={require('../img/Home/tick.png')} style={{width: 16,height: 16,}}/>
                        <Text style={{fontSize:12, width:'90%'}}>Lorem ipsum dolor sit amet, consec dolum</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'flex-start', justifyContent:'space-between',}}>
                        <Image source={require('../img/Home/tick.png')} style={{width: 16,height: 16,}}/>
                        <Text style={{fontSize:12, width:'90%'}}>Lorem ipsum dolor sit amet, consec dolum</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{color:'#ED1F24', fontWeight:'700'}}>79.000đ</Text>
                        <TouchableOpacity
                        onPress={() =>{
                            setCancer1('absolute')
                        }}
                        style={{width: 89,height: 34,backgroundColor:'#ED1F24',justifyContent:'center', alignItems:'center',borderRadius:27}}>
                           <Text style={{color:'#fff'}}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '95%',marginTop:14,backgroundColor:'#fff', borderRadius:8, height:193,
        justifyContent:'center',
        alignItems:'center'
    },
    background:{
        width:'100%',
        height:'100%',
        position:'absolute'
        , borderRadius:8
    }
    
})