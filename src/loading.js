import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';

export default Loading = ({navigation,route}) =>{
    return(
        <SafeAreaView style={{flex:1}} onTouchStart={()=>{
            navigation.navigate('Home',1000)
        }}>
            <View style={styles.container} 
        >
                <View style={styles.logo}>
                <Image source={require('../src/img/loginimg/logo.png')} style={{width:172, height:71, }} resizeMode = "stretch" />
                </View>

                <View style={styles.loading}>
                    <Image source={require('../src/img/loginimg/Spinner-0.5s-210px.gif')} style={{width:100, height:100, }} resizeMode = "stretch" />
                    <Text style={{color:'#5E5E5E'}}>Đang đăng nhập</Text>
                    <Text style={{color:'#5E5E5E'}}>Sắp hoàn tất</Text>
                </View>
                <View style={styles.footer}>
                    <View style={{height:1, width:'100%',backgroundColor:'#2C2929', top:-26, opacity:0.1}}></View>
                    <Text>© copyright itel vietnam</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'white'

    },
    loading:{
        width:230,
        height:300,
        borderradius: '50%',
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        top:170,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:73,
        opacity:0.5
    },
});