import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default ItemData = () =>{
    return(
        <ScrollView horizontal style={{marginTop:16,}}>
        <View style={styles.itemdata}>
        <LinearGradient
            // Background Linear Gradient
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            colors={['#FF5647', '#D270F9']}
            style={styles.background}
        />
            <View style={{flexDirection:'row',justifyContent:'space-between',width: '90%',}}>
            <View style={{ marginTop:10}}>
                <Text style={{color:'#fff', fontSize:24, fontStyle:'italic', fontWeight: '700',}}>ITEL79</Text>
                <Text style={{color:'#fff', marginTop:5, marginBottom:5}}>3GB data / ngày</Text>
                
                <View style={{marginBottom: 14,}}>
                    <Text style={{color:'#fff',fontSize:12}}>Miễn phí</Text>
                    <Text style={{color:'#fff',fontSize:12}}>1000 phút nội mạng</Text>
                    <Text style={{color:'#fff',fontSize:12}}>10 phút ngoại mạng</Text>
                </View>
                
            </View>
            
            <View style={{ justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:16, fontWeight:'700', lineHeight:18.75, marginTop:19,color:'#fff'}}>79.000đ</Text>
                <TouchableOpacity style={{width:89,height: 31,backgroundColor:'#fff', justifyContent:'center', alignItems:'center', marginBottom:20, borderRadius:27}}>
                    <Text style={{fontWeight:'500',fontSize:12}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        
        <View style={styles.itemdata}>
        <LinearGradient
            // Background Linear Gradient
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            colors={['#7D48C5', '#D26FF8']}
            style={styles.background}
        />
            <View style={{flexDirection:'row',justifyContent:'space-between',width: '90%',}}>
            <View style={{ marginTop:10}}>
                <Text style={{color:'#fff', fontSize:24, fontStyle:'italic', fontWeight: '700',}}>ITEL19</Text>
                <Text style={{color:'#fff', marginTop:5, marginBottom:5}}>3GB data / ngày</Text>
                
                <View style={{marginBottom: 20,}}>
                    <Text style={{color:'#fff',fontSize:12}}>Miễn phí</Text>
                    <Text style={{color:'#fff',fontSize:12}}>1000 phút nội mạng</Text>
                    <Text style={{color:'#fff',fontSize:12}}>10 phút ngoại mạng</Text>
                </View>
                
            </View>
                
            <View style={{ justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:16, fontWeight:'700', lineHeight:18.75, marginTop:19,color:'#fff'}}>79.000đ</Text>
                <TouchableOpacity style={{width:89,height: 31,backgroundColor:'#fff', justifyContent:'center', alignItems:'center', marginBottom:20, borderRadius:27}}>
                    <Text style={{fontWeight:'500',fontSize:12}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </View>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemdata:{
        width:272,
        alignItems:'center' ,
        marginLeft:15,
        
    },
    background:{
        width:'100%',
        height:'100%',
        position:'absolute'
    }
    
})