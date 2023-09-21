import React, { Component, useState, useEffect, useRef } from "react";
import { createContext, useContext } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
  import { QueryClient, useQuery } from "@tanstack/react-query";
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { useChangePhoneInfo, useFeatchData } from "./services";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
const { width } = Dimensions.get('window')
const ThemeContext = createContext(null);
//Hiển thị số đếm lúc chuyển sang slide mới



export default Data=({navigation,route})=> {
    const { userInfo, saveUserInfo } = useGetUserInfo();
    const [money , setMoney] = useState(userInfo.money)

    const {data , isLoading} = useFeatchData({money})
    const changePhoneInfo = useChangePhoneInfo()
    const [cancer,setCancer] = useState('relative')
    const [cancer1,setCancer1] = useState('relative')
    const [cancer2,setCancer2] = useState('relative')
    const [cancer3,setCancer3] = useState('relative')
    const handleConfirm = async () => {
        setCancer('relative')
        if(userInfo.money<50000){
            setCancer1('absolute')
        }else{
            setCancer2('absolute')
            setMoney(userInfo.money-50000)
            const res = await changePhoneInfo.mutateAsync({
                ...route.params.data[route.params.user],
                money: (userInfo.money-50000),
            });
            saveUserInfo(res.data)
            route.params.setMoneyNow(res.data.money)
        }
    }
    
    function ItemData({ children }) {
        const [cancer1,setCancer1] = useState('relative')
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{width:'100%'}}>
                    
                <View style={styles.container1}>
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
                                setCancer3('absolute')
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
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{width: '100%',}}>
            <ScrollView>
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
                            <Text style={{fontSize: 17,lineHeight:22,fontWeight:'700',color:'#fff'}}>Ưu đãi đã nhận</Text>
                    </View>
                    
                </View>

                <View style={{width:'90%',height:160, alignItems:'center', marginTop:20}}>
                <Swiper style={styles.wrapper}
                showsButtons
          >
                    <View style={styles.slide}>
                        <Image
                                        source={require("../img/Home/Mask.jpg")}
                                        style={{ width: '100%', height: 151, marginLeft:10,marginRight:10, }}
                                        />
                    </View>
                    <View style={styles.slide}>
                    <Image
                                        source={require("../img/Home/Mask.jpg")}
                                        style={{  width: '100%', height: 151, marginLeft:10,marginRight:10, }}
                                        />
                    </View>
                    <View style={styles.slide}>
                    <Image
                                        source={require("../img/Home/Mask.jpg")}
                                        style={{  width: '100%', height: 151, marginLeft:10,marginRight:10, }}
                                        />
                    </View>
                </Swiper>  
                </View>
                <Text style={{fontWeight:'700', textAlign:'left', width:'80%'}}>Mùa Game lớn nhất năm - DATA giảm 50%<Text style={{fontWeight:'400', color:'lightgray'}}> Quảng cáo chương trình</Text></Text>
                <View style={{ width:'90%',marginTop:21}}>
                    <Text style={{fontWeight:'900', fontSize:16}}>Gói cước dành cho bạn</Text>
                    <ScrollView>
                    <ThemeContext.Provider value={cancer}>
                    <ItemData />
                    
                    <ItemData />
                    <ItemData /></ThemeContext.Provider>
                    </ScrollView>
                    <Text style={{fontWeight:'900', fontSize:16}}>Gói cực HOT</Text>
                    <ScrollView>
                    <ItemData />
                    <ItemData />
                    <ItemData />
                    </ScrollView>
                    <Text style={{fontWeight:'900', fontSize:16}}>Gói cước DATA</Text>
                    <ScrollView>
                    <ItemData />
                    <ItemData />
                    <ItemData />
                    </ScrollView>
                </View>
                
            </View></ScrollView>
            </View>

            <View style={{width:'100%',height:'100%',borderRadius:20, position:cancer3, bottom:0, alignItems:'center'}}>
                <View style={{width: '100%',height:'50%',backgroundColor:'#00000070'}}>
                </View>
                <View style={{width: '100%',height: '50%',alignItems:'center',backgroundColor:'#fff'}}>
                    <View style={{width: '100%',alignItems:'center',marginTop: 30, }}>
                        <TouchableOpacity
                        onPress={() => {
                            setCancer3('relative')
                        }}
                        style={{ width:'90%', alignItems:'flex-end'}}>
                            <Image
                                source={require('../img/Home/cancer.png/')}
                                style={{width:16,height: 16,}}
                            />
                        </TouchableOpacity>
                        <View style={{width: 90,height: 90,alignItems:'center', justifyContent:'center'}}>
                            <LinearGradient
                    // Background Linear Gradient
                                start={{x:0,y:0}}
                                end={{x:1,y:0}}
                                colors={['#E8232A', '#F8B42A']}
                                style={styles.background}
                            />
                            <View style={{width: 51,height: 28,backgroundColor:'#fff',position:cancer, top:62, right:40, borderBottomRightRadius:15, borderTopRightRadius:15, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight:'700', fontSize:16,color:'#ED2126'}}>100K</Text>
                            </View>
                        <Text style={{fontWeight:'900',fontSize:20,fontStyle:'italic',color:'#fff', marginBottom:10,}}>ITEL100</Text>
                        
                        </View>
                    <View style={{width: '60%',alignItems:'center', marginTop:39,}}>
                        <Text style={styles.bold}>Xác nhận đăng ký</Text> 
                        <Text style={{fontWeight:'400', fontSize:16,color:'#464646', textAlign:'center'}}>Chấp nhận bỏ gói cước hiện tại và sử dụng gói mới</Text>
                    </View>
                    </View>
                    <TouchableOpacity
                    onPress={() => {
                        setCancer('absolute')
                        
                    }}
                    style={{width:230, height: 48,backgroundColor:'#ED1F24', justifyContent:'center', alignItems:'center', borderRadius:27,marginTop:20,}}>
                        <Text style={{fontSize:20, fontWeight:'700',color:'#fff'}}>Đồng ý</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        setCancer3('relative')
                    }}
                    style={{width:230, height: 48,backgroundColor:'#999999', justifyContent:'center', alignItems:'center', borderRadius:27,marginTop:10}}>
                        <Text style={{fontSize:20, fontWeight:'700',color:'#fff'}}>Quay lại</Text>
                    </TouchableOpacity>
                    </View>
            </View>
            <View style={{width:'100%',height:'100%',borderRadius:20, position:cancer, bottom:0, alignItems:'center'}}>
                <View style={{width: '100%',height:'50%',backgroundColor:'#00000070'}}>
                </View>
                <View style={{width: '100%',height: '50%',alignItems:'center',backgroundColor:'#fff'}}>
                    <View style={{width: '100%',alignItems:'center',marginTop: 30, }}>
                        <TouchableOpacity
                        onPress={() => {
                            setCancer('relative')
                        }}
                        style={{ width:'90%', alignItems:'flex-end'}}>
                            <Image
                                source={require('../img/Home/cancer.png/')}
                                style={{width:16,height: 16,}}
                            />
                        </TouchableOpacity>
                        <View style={{width: 90,height: 90,alignItems:'center', justifyContent:'center'}}>
                            <LinearGradient
                    // Background Linear Gradient
                                start={{x:0,y:0}}
                                end={{x:1,y:0}}
                                colors={['#E8232A', '#F8B42A']}
                                style={styles.background}
                            />
                            <View style={{width: 51,height: 28,backgroundColor:'#fff',position:cancer, top:62, right:40, borderBottomRightRadius:15, borderTopRightRadius:15, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight:'700', fontSize:16,color:'#ED2126'}}>100K</Text>
                            </View>
                        <Text style={{fontWeight:'900',fontSize:20,fontStyle:'italic',color:'#fff', marginBottom:10,}}>ITEL100</Text>
                        
                        </View>
                    <View style={{width: '60%',alignItems:'center', marginTop:39,}}>
                        <Text style={styles.bold}>Xác nhận đăng ký</Text> 
                        <Text style={{fontWeight:'400', fontSize:16,color:'#464646'}}>Xác nhận sử dụng gói DATA này?</Text>
                    </View>
                    </View>
                    <TouchableOpacity
                    onPress={handleConfirm}
                    style={{width:230, height: 48,backgroundColor:'#ED1F24', justifyContent:'center', alignItems:'center', borderRadius:27,marginTop:40,}}>
                        <Text style={{fontSize:20, fontWeight:'700',color:'#fff'}}>Đồng ý</Text>
                    </TouchableOpacity>
                    </View>
            </View>

            <View style={{width:'100%',height:'100%', position:cancer1, bottom:0, alignItems:'center'}}>
                <View style={{width: '100%',height:'50%',backgroundColor:'#00000070'}}>
                </View>
                <View style={{width: '100%',borderRadius:20,height: '50%',alignItems:'center',backgroundColor:'#fff'}}>
                    <View style={{width: '100%',alignItems:'center',marginTop: 30, }}>
                        <TouchableOpacity
                        onPress={() => {
                            setCancer1('relative')
                        }}
                        style={{ width:'90%', alignItems:'flex-end'}}>
                            <Image
                                source={require('../img/Home/cancer.png/')}
                                style={{width:16,height: 16,}}
                            />
                        </TouchableOpacity>
                    <Image
                        source={require('../img/Home/false.png')}
                        style={{width: 92,height: 92,}}
                    />
                    <View style={{width: '80%',alignItems:'center', marginTop:39,}}>
                        <Text style={styles.bold}>Số dư tài khoản không đủ</Text> 
                        <Text style={{fontWeight:'400', fontSize:16,color:'#464646'}}>Xác nhận sử dụng gói DATA này?</Text>
                    </View>
                    </View>
                    <TouchableOpacity style={{width:230, height: 48,backgroundColor:'#ED1F24', justifyContent:'center', alignItems:'center', borderRadius:27,marginTop:40,}}>
                        <Text style={{fontSize:20, fontWeight:'700',color:'#fff'}}>Nạp tiền</Text>
                    </TouchableOpacity>
                    </View>
            </View>

            <View style={{width:'100%',height:'100%', position:cancer2, bottom:0, alignItems:'center'}}>
                <View style={{width: '100%',height:'50%',backgroundColor:'#00000070'}}>
                </View>
                <View style={{width: '100%',borderRadius:20,height: '50%',alignItems:'center',backgroundColor:'#fff'}}>
                <TouchableOpacity
                        onPress={() => {
                            setCancer2('relative')
                            navigation.navigate('Home', {user:userInfo.id})
                        }}
                        style={{ width:'90%', alignItems:'flex-end', marginTop: 30,}}>
                            <Image
                                source={require('../img/Home/cancer.png/')}
                                style={{width:16,height: 16,}}
                            />
                        </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center',marginTop: 30 , marginTop:60,}}>
                        
                    <Image
                        source={require('../img/Home/true.png')}
                        style={{width: 115,height: 115,}}
                    />
                    <View style={{width: '80%',alignItems:'center', marginTop:39,}}>
                        <Text style={styles.bold}>Đăng kí gói cước thành công</Text> 
                    </View>
                    </View>
                    
                    </View>
            </View>
        </SafeAreaView>
        
    );
}




const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center'
    },
    wrapper: {
    },

 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold'
 },

    slide: {
    
    justifyContent: 'center',
    alignItems: 'center',

    },
    background:{
        width:'100%',
        height:'100%',
        position:'absolute'
        , borderRadius:8
    },
    bold:{
        fontWeight:'700',
        fontSize:24
    },
    container1:{
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