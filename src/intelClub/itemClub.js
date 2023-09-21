import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';


export default ItemClub = () =>{
    return(
<TouchableOpacity style={styles.item}>
                <View style={{width:'100%',height:156,backgroundColor:'#C4C4C4',borderRadius:4}}></View>
                <View style={{width:'90%', alignItems:'center'}}>
                    <Text style={{textAlign:'left',lineHeight:16,fontSize:14,fontWeight: '700',marginTop: 8,marginBottom: 14,}}>Voucher promotion title right here</Text>
                </View>
                <View style={{flexDirection:'row',width: '90%',}}>
                    <View style={{width:34,height:36, backgroundColor:'#C4C4C4',marginRight: 9,}}></View>
                    <View style={{height:37,justifyContent:'center',marginBottom: 19, }}>
                        <View  style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={require('../img/Home/coin.jpg')} style={{width:11, height:10,marginRight:4}}/>
                            <Text style={{fontSize: 12,lineHeight:14.06,color:'#ED1F24'}}>200 điểm</Text>
                        </View>

                        <View  style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={require('../img/Home/date.jpg')} style={{width:11, height:11,marginRight:4}}/>
                            <Text style={{fontSize: 12,lineHeight:14.06}}>31/12/2021</Text>
                        </View>
                    
                    </View>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
item:{
    width:'48%',
    alignItems:'center',
    backgroundColor:'#fff',
    marginBottom:15
}
    
})