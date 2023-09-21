import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';


export default ItemGame = () =>{
    return(
        <ScrollView horizontal style={{marginTop:16,marginLeft:19}}>
            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Hành động</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Giải đố</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Hành động</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Hành động</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Hành động</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <Text style={{fontSize:12,lineHeight:14}}>Hành động</Text>
                </View>
            </TouchableOpacity>            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
item:{
    width:150.53,
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:4,
    marginRight:18,
    shadowColor: 'black',
    shadowRadius:10,
    paddingBottom:15
}
    
})