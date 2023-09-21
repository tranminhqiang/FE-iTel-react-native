import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert,FlatList} from 'react-native';
import DetailVoucher from './detailVoucher';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";
export default ItemVoucher = ({nameVoucher,date}) =>{
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://64d08f7cff953154bb791252.mockapi.io/api/v1/voucher"
      ).then((res) => res.json()),
  });

      return (
       
          <View
            
          style={{width:'90%', marginBottom: 20,}}> 
        <View style={{width:'90%', height:70,marginLeft:11, backgroundColor:'#fff', justifyContent:'center', alignItems:'center', flexDirection:'row', borderWidth:1}}>
        <View style={styles.image}>
            <Image
            style={{ width: 58, height: 58, backgroundColor:'#C4C4C4' , marginRight:5,}}
            />
        </View>
        <View style={{flex:1, marginLeft:5,justifyContent:'center'}}>
            <View style={styles.item}>
            <Text style={{width:'80%'}}>{nameVoucher}</Text>
            </View>
            <View style={{alignItems:'center', flexDirection:'row', paddingTop:5}}>
                <Image
                source={require("../img/Home/date.png")}
                style={{ width: 13.1, height: 13.1, marginRight:2, }}
                />
                <Text>{date}</Text>
            </View>
        </View>
    </View>
    </View>
      );

      
};

const styles = StyleSheet.create({
    image:{
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        borderRightColor: '#C4C4C4',
        borderRightWidth:1,
        borderStyle:'dashed',
        marginRight:5,
    }
})