import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default ItemCinema = () =>{
    return(
        <ScrollView horizontal style={{marginTop:16,marginLeft:19}}>
            <TouchableOpacity style={styles.item}>
                <Image source={require('../img/Cinema/phim4.png') } style={{width: 104,height: 156,}}/>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:16, color:'gray', marginTop:10,}}>Glow session 2</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <Image source={require('../img/Cinema/phim3.png') } style={{width: 104,height: 156,}}/>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:16, color:'gray', marginTop:10,}}>Jessica Jones</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require('../img/Cinema/phim2.png') } style={{width: 104,height: 156,}}/>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:16, color:'gray', marginTop:10,}}>Dear whitepeople</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require('../img/Cinema/phim1.png') } style={{width: 104,height: 156,}}/>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:16, color:'gray', marginTop:10,}}>Phim dài tập</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Image source={require('../img/Cinema/phim4.png') } style={{width: 104,height: 156,}}/>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:16, color:'gray', marginTop:10,}}>Phim dài tập</Text>
                </View>
            </TouchableOpacity>         
        </ScrollView>
    )
}

const styles = StyleSheet.create({
item:{
    width:104,
    alignItems:'center',
    borderRadius:4,
    marginRight:18,
    shadowColor: 'black',
    shadowRadius:10,
    paddingBottom:15
}
    
})