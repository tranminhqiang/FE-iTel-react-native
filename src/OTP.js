import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView } from 'react-native';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";
  import moment from 'moment';

import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';

export default Login = ({navigation,route}) => {
    const  [number, setNumber] = useState('');
    const  [network, setNetwork] = useState('relative')
    const  [look, setLook] = useState('absolute');

    var dem = 0;
    const  [otp, setOtp] = useState(1);
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          fetch("https://64d08f7cff953154bb791252.mockapi.io/api/v1/otp").then(
            (res) =>  res.json(),
          ),
      });
      
      const hour = moment().format("mm ss");
    return(
        <SafeAreaView style={{flex:1}} >
            <View style={styles.container} >
                {/*begin Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={{left:322}}onPress={()=>{
                        navigation.goBack();
                    }}>
                        <Image source={require('../src/img/loginimg/cancel.jpg')} style={{width:24, height:24}} resizeMode = "stretch" />
                    </TouchableOpacity>
                </View>
                {/*end Header */}

                {/*begin Content */}
                <View style={styles.content}>
                        <View style={styles.logo}>
                            <Image source={require('../src/img/loginimg/logo.png')} style={{width:172, height:71}} resizeMode = "stretch" />
                        </View>
                        <View style={styles.input}>
                            <Text>Nhập mã OTP được gửi đến điện thoại</Text>
                            <View style={{width:'100%', height:113}}>
                                <View style={{flexDirection:'row',height:58,backgroundColor:'white', alignItems:'center', width:'100%', justifyContent:'center'}}>
                                    <Image source={require('../src/img/phone.jpg')} style={{width:14.37, height:23.24, }} resizeMode = "stretch" />
                                    <TextInput placeholder='Nhập OTP' placeholderTextColor={'black'} style={{width:'75%', textAlign:'center', fontSize:20}} value={number} onChangeText={setNumber}/>
                                    
                                </View>
                                
                                <TouchableOpacity style={styles.btnLogin}onPress={() =>{
                                    //setNetwork(route.params.look)
                                    
                    for(var i=0;i<data.length;i++){
                        if(number==data[i].otp){
                            dem=dem+1
                        }else{
                            dem=dem+0
                        }
                        
                    }setOtp(otp+1)
                    if(dem!=0){
                        alert('Đăng nhập thành công')
                    }else{
                        alert('Sai OTP, vui lòng nhập lại')
                    }

                    if(otp>2){
                        alert('Nhập sai quá 3 lần, vui lòng nhập lại sau 3 phút nữa')
                        route.params.setNext(moment().add(3, 'minute').format("mm : ss"))
                        navigation.goBack()
                    }
                    
                    
                                }}>
                                    <Text style={{color:'#fff', fontSize:20}}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    <View style={styles.more}>
                        <View style={styles.threeG}>
                            <Image source={require('../src/img/loginimg/3G.jpg')} style={{width:24, height:24, }} resizeMode = "stretch" />
                            <Text style={{fontWeight:'500', width:'75%', textAlign:'center', fontWeight:'600'}}>Đăng nhập bằng 3G/4G</Text>
                        </View>
                        <View style={styles.zalo}>
                            <View style={{width:29.62, height:29.62, borderRadius:18.31, backgroundColor:'#268DFE', justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight:'700',fontSize:10, color:'#fff'}}>Zalo</Text>
                            </View>
                            <Text style={{fontWeight:'500', width:'75%', textAlign:'center', fontWeight:'600'}}>Đăng nhập bằng Zalo</Text>
                        </View>
                        <View style={styles.morelogin}>
                        <TouchableOpacity style={{width:'45%', backgroundColor:'#FC6A57',flexDirection:'row',  justifyContent:'center',alignItems:'center',height:48}}>
                                <Image source={require('../src/img/loginimg/google.png')} style={{width:24, height:24, }} resizeMode = "stretch" />
                                <Text style={{color:'#fff', fontWeight:'500', width:'50%', textAlign:'center'}}>Google</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{width:'45%', backgroundColor:'#298FFF',flexDirection:'row',  justifyContent:'center',alignItems:'center',height:48}}>
                                <Image source={require('../src/img/loginimg/face.png')} style={{width:24, height:24, }} resizeMode = "stretch" />
                                <Text style={{color:'#fff', fontWeight:'500', width:'60%', textAlign:'center'}}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/*end Content */}

                {/*begin Footer */}
                <View style={styles.footer}>
                    <View style={{height:1, width:'100%',backgroundColor:'#2C2929', top:-26, opacity:0.1}}></View>
                    <Text>© copyright itel vietnam</Text>
                </View>
                {/*end Footer */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
        alignItems:'center',
        backgroundColor:'#F9F9F9'
    },
    header:{
        width:'100%',
        top:36,
    },
    content:{
        top:172,
        width:'100%',
        alignItems:'center'
    },
    footer:{
        top:330,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:73,
        opacity:0.5
    },
    input:{
        top:49,
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        borderRadius:4, 
    },
    btnLogin:{
        width:'100%',
        backgroundColor:'#ED1F24',
        height:48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:27,
        marginTop: 7,
    },
    more:{
        width:'80%',
        justifyContent:'space-between',
        alignItems:'center',
        top:111,
        height:181
    },
    threeG:{
        flexDirection:'row',
        width:'100%', 
        alignItems:'center',
        justifyContent:'center',
        height:48,
        backgroundColor:'white'
    },
    zalo:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:48,
        backgroundColor:'white'
    },
    morelogin:{
        width:'100%',
        height:58,
        flexDirection:'row', 
        justifyContent:'space-between'
    }
  });

