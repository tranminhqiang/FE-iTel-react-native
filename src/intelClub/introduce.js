import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';

export default Introduce = ({navigation}) =>{
    const [btn1,setBtn1] = useState(700)
    const [btn2,setBtn2] = useState(400)
    const [btn3,setBtn3] = useState(400)

    const [view1,setView1] =useState('#EC1D22')
    const [view2,setView2] =useState('#E8E8E8')
    const [view3,setView3] =useState('#E8E8E8')

    const [screen1,setScreen1] =useState('100%')
    const [screen2,setScreen2] =useState('0%')
    const [screen3,setScreen3] =useState('0%')

    const [height1,setHeight1] = useState('100%')
    const [height2,setHeight2] = useState('0%')
    const [height3,setHeight3] = useState('0%')
    
    const [mode1,setMode1] = useState('on')
    const [KC,setKC] = useState(47)
    const [mode2,setMode2] = useState('on')
    const [gold,setGold] = useState(47)
    const [more,setMore] = useState("../img/Home/more.png")
    return(
        <SafeAreaView style={{width:'100%', height:'100%', justifyContent: "center", alignItems: "center"}}>
            <ScrollView style={{width:'100%', height: 500,}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}  style={{width: '10%', alignItems:'center'}}>
                        <Image
                        source={require("../img/Home/Back.png")}
                        style={{ width: 6, height: 12 }}
                        resizeMode="stretch"
                        />
                    </TouchableOpacity>
              <Text style={{fontSize:17, fontWeight:'700',lineHeight:22, color:'#fff', width:'80%',textAlign:'center'}}>Giới thiệu iTel Club</Text>
                </View>

                <View style={{flexDirection:'row', marginTop:14}}>
                <TouchableOpacity style={{flex:1}}
                    onPress={()=>{
                        setBtn1('700')
                        setBtn2('400')
                        setBtn3('400')

                        setView1('#EC1D22')
                        setView2('#E8E8E8')
                        setView3('#E8E8E8')

                        setScreen1('100%')
                        setScreen2('0%')
                        setScreen3('0%')
                    }}
                >
                    <Text style={{width:'100%', textAlign:'center', fontWeight:btn1, paddingBottom:6}}>Giới thiệu</Text>
                    <View style={{backgroundColor:view1, height:2}}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1.5}} onPress={()=>{
                        setBtn1('400')
                        setBtn2('700')
                        setBtn3('400')

                        setView1('#E8E8E8')
                        setView2('#EC1D22')
                        setView3('#E8E8E8')

                        setScreen1('0%')
                        setScreen2('100%')
                        setScreen3('0%')
                    }}>
                    <Text style={{width:'100%', textAlign:'center', fontWeight:btn2, paddingBottom:6}}>Tiêu chí xét hạng</Text>
                    <View style={{backgroundColor:view2, height:2}}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1.5}}  onPress={()=>{
                        setBtn1('400')
                        setBtn2('400')
                        setBtn3('700')
                        setView1('#E8E8E8')
                        setView2('#E8E8E8')
                        setView3('#EC1D22')
                        setScreen1('0%')
                        setScreen2('0%')
                        setScreen3('100%')
                    }}>
                    <Text style={{width:'100%', textAlign:'center', fontWeight:btn3, paddingBottom:6,}}>Quyền lợi hội viên</Text>
                    <View style={{backgroundColor:view3, height:2}}></View>
                </TouchableOpacity>
                </View>

                <View style={{width:'100%', flexDirection: 'row',}}>
                    <View style={{width:screen1}}>
                        <View style={{width:'100%', alignItems:'center'}}>
                            <View style={{width:'90%', marginTop:20}}>
                                <Image
                                        source={require("../img/Home/bannerIntroduce.png")}
                                        style={{ width: '100%', height: 268 }}
                                        resizeMode="stretch"
                                        />
                                <Text style={{fontWeight:'700', fontSize:16, lineHeight:22, color:'#3C3C3C', marginTop:33,}}>Đầy ắp ưu đãi - Voucher cực sốt</Text>
                                <Text style={{fontSize:16, lineHeight:24, marginTop:7}}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                </Text>
                                <Text style={{fontSize:16, lineHeight:24, marginTop:25}}>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                                </Text>
                            
                            
                            </View>
                        </View>
                        <TouchableOpacity style={{width:'90%',height:50, borderColor:'#0000001A', borderWidth:1, justifyContent:'center', alignItems:'center', marginTop:20, marginBottom:15,}}>
                                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{fontWeight:'700', fontSize:14}}>Các hướng dẫn sử dụng điểm</Text>
                                    <Image
                                        source={require("../img/Home/more.png")}
                                        style={{ width:9, height: 5 }}
                                        resizeMode="stretch"
                                        /></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{width:'90%',height:50, borderColor:'#0000001A', borderWidth:1, justifyContent:'center', alignItems:'center', marginBottom:15,}}>
                                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                                    <Text style={{fontWeight:'700', fontSize:14}}>Các hướng dẫn tích điểm</Text>
                                    <Image
                                        source={require("../img/Home/more.png")}
                                        style={{ width:9, height: 5 }}
                                        resizeMode="stretch"
                                        /></View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{flexDirection:'row', width: '90%', backgroundColor:'#ED1F24',justifyContent:'center', alignItems:'center', height:48, borderRadius:27, marginTop:15,}}>
                                <Image
                                        source={require("../img/Home/itelClubWhite.png")}
                                        style={{ width:18, height: 25 }}
                                        resizeMode="stretch"
                                        />
                                        <Text style={{color:'#fff', fontSize:16, fontWeight:'700', marginLeft: 8,}}>Khám phá ưu đãi</Text>
                                </TouchableOpacity>
                    </View>

                    <View style={{width:screen2, alignItems:'center'}}>
            <View style={{width:'90%'}}>
                <View style={{width:'100%', backgroundColor:'#C4C4C4', height:180, marginTop:22}}>

                </View>

                <Text style={{fontSize: 16,lineHeight:22,marginTop:22, marginBottom:20,}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                </Text>

                <View style={{height:47,height:KC}}>
                    <TouchableOpacity
                        onPress={()=>{
                            if(mode1==='on'){
                                setMode1("off")
                                setKC(150)
                            }else{
                                setMode1("on")
                                setKC(40)
                            }
                        }}
                    style={{width:'100%', height:47 ,backgroundColor:'#41D3CF', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontWeight:'700', fontSize: 17,color:'#fff'}}>Hội viên kim cương</Text>
                    </TouchableOpacity>
                    <View style={{width:'100%', }}>
                        <Text >
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                    </Text>
                    </View>
                    
                </View>

                <View style={{height:47,height:gold, marginTop:10}}>
                    <TouchableOpacity
                    onPress={()=>{
                        if(mode2==='on'){
                            setMode2("off")
                            setGold(150)
                        }else{
                            setMode2("on")
                            setGold(0)
                        }
                    }}
                    style={{width:'100%', height:47 ,backgroundColor:'#41D3CF', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontWeight:'700', fontSize: 17,color:'#fff'}}>Hội viên Vàng</Text>
                    </TouchableOpacity>
                    <Text>
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                    </Text>
                </View>

                <View style={{height:47,height:150, marginTop:50}}>
                    <TouchableOpacity
                    
                    style={{width:'100%', height:47 ,backgroundColor:'#41D3CF', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontWeight:'700', fontSize: 17,color:'#fff'}}>Hội viên Bạc</Text>
                    </TouchableOpacity>
                    <Text>
Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                    </Text>
                </View>
            </View>
        </View>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
    width:'100%',
    alignItems:'center',
    marginTop: 44,
},
header:{
    height:44,
    backgroundColor:'#ED1F24',
    justifyContent:'flex-start',
    flexDirection:'row',
    alignItems:'center', width:'100%'
}
    
})