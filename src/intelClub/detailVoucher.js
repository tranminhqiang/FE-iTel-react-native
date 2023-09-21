import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView, Animated,Easing } from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert,FlatList} from 'react-native';
import { Link } from '@react-navigation/native';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";

  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
Animated.sequence([
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        delay:500,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        delay:500,
      })
]).start();

      

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };
  
export default DetailVoucher = ({navigation, route}) =>{
    const [drawerPosition, setDrawerPosition] = useState('left');
  const [ColorLeft,setColorLeft]= useState('#EC1D22')
  const [ColorRight,setColorRight]= useState('#3C3C3C3C')
  const [weightLeft,setWeightLeft]= useState(700)
  const [weightRight,setWeightRight]= useState(400)
  const [voucherVip,setVoucherVip] = useState('0%')
  const [voucher,setVoucher] = useState('100%')
  const [screenAccess, setScreenAccess] = useState('relative')
  const [screenPhone, setScreenPhone] = useState('relative')
  const [screenOTP, setScreenOTP] = useState('relative')
  const [number,setNumber] = useState('')
  const [numberOTP,setNumberOTP] = useState('')
  const [effectScreen,setEffectScreen] = useState('relative')
  const [effect,setEffect] = useState('')
  const [a,setA] = useState(0)
  const [imgTrue,setImgTrue] = useState(67)
  const [imgFalse,setImgFalse] = useState(0)
  const [text,setText] = useState('')
  const [btn,setBtn] = useState('')
  const [textOpacity,setTextOpacity] = useState('relative')
  const [backgroundBtn,setBackgroundBtn] = useState('#ED1F24')
  const [textBtn,setTextBtn] = useState('Nhận ưu đãi')
  const [giveData,setGiveData] = useState('relative')
  const [QR,setQR] = useState('relative')
  const [hightDetailVoucher,setHightDetailVoucher] = useState('0%')
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://64d08f7cff953154bb791252.mockapi.io/api/v1/voucher"
      ).then((res) => res.json()),
  });

  const Item = ({content}) => (
    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:5}}>
                    <Image
                        source={require("../img/Home/tick.png")}
                        style={{ width: 23, height:23, borderRadius:4 }}
                    />
                    <Text style={{fontSize:16, width:'80%'}}>{data[route.params.data].content}</Text>
                    </View>
  );
    return(
        <SafeAreaView style={{flex:1}}>
           {/*Container */} 
            <View style={styles.container}>
                <View style={{flexDirection:'row', height:84, paddingTop:40,backgroundColor:'red', justifyContent:'space-between', alignItems:'center',}}> 
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
                <View style={{width:'90%', alignItems:'center', paddingTop:23}}>
                    <Image
                        source={require("../img/Home/bannerIntroduce.png")}
                        style={{ width: '100%', height: 180, borderRadius:4 }}
                    />
                    <View style={{width:'88%', top:-50}}>
                    <View style={{width: 68,height: 73.4,backgroundColor:'#C4C4C4', borderWidth:5, borderColor:'#fff', position:'absolute',}}>

                    </View>
                    </View>
                    <View style={{marginTop: 30,width:'100%'}}>
                        <Text style={{fontWeight:'700', fontSize:20, lineHeight:23.44, width:'90%'}}>{data[route.params.data].nameVoucher}</Text>
                        <View style={{marginTop:19, flexDirection:'row', width:'45%', justifyContent:'space-between' }}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    source={require("../img/Home/coin.jpg")}
                                    style={{ width: 12.09, height: 11.08, borderRadius:4 }}
                                />
                                <Text style={{fontSize:12, color:'red', marginLeft:2,}}>{data[route.params.data].poin}Điểm</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    source={require("../img/Home/date.png")}
                                    style={{ width: 13.09, height:13.09, borderRadius:4 }}
                                />
                                <Text style={{fontSize:12, marginLeft:2}}>{data[route.params.data].date}</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                <View style={{flexDirection:'row', width:'100%',height:34,backgroundColor:'#fff',marginTop:14,}}>
                <TouchableOpacity style={{alignItems:'center', width:'50%'}} onPress={()=>{
                  setColorLeft('#EC1D22')
                  setColorRight('#3C3C3C3C')
                  setWeightLeft(700)
                  setWeightRight(400)
                  setVoucherVip('0%')
                  setVoucher('100%')
                }}>
                    <Text style={{fontWeight:weightLeft, fontSize:16, lineHeight:22,marginBottom:5,}}>Nội dung ưu đãi </Text>
                    <View style={{height:2,width:'100%',backgroundColor:ColorLeft}}></View>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center', width:'50%'}} onPress={()=>{
                  setColorLeft('#3C3C3C3C')
                  setColorRight('#EC1D22')
                  setWeightLeft(400)
                  setWeightRight(700)
                  setVoucherVip('100%')
                  setVoucher('0%')
                }}>
                    <Text style={{fontWeight:weightRight, fontSize:16, lineHeight:22,marginBottom:5}}>Cửa hàng áp dụng </Text>
                    <View style={{height:2,width:'100%',backgroundColor:ColorRight}}></View>
                </TouchableOpacity>
              </View>
                <View style={{flexDirection:'row', height:270, borderBottomWidth:1, borderBottomColor:'#E8E8E8'}}>
                <View style={{width:voucher,alignItems:'center'}}>
                    
                <FlatList
                    data={data[route.params.data].content}
                    renderItem={({item}) => <Item  />}
                    keyExtractor={item => item.id}
                />
                    
                </View>
                
                <View style={{width:voucherVip,alignItems:'center', backgroundColor:'lightgray'}}>
                    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                    <Image
                        source={require("../img/Home/tick.png")}
                        style={{ width: 23, height:23, borderRadius:4 }}
                    />
                    <Text style={{fontSize:16, width:'80%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                    <Image
                        source={require("../img/Home/tick.png")}
                        style={{ width: 23, height:23, borderRadius:4 }}
                    />
                    <Text style={{fontSize:16, width:'80%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                    <Image
                        source={require("../img/Home/tick.png")}
                        style={{ width: 23, height:23, borderRadius:4 }}
                    />
                    <Text style={{fontSize:16, width:'80%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                    <Image
                        source={require("../img/Home/tick.png")}
                        style={{ width: 23, height:23, borderRadius:4 }}
                    />
                    <Text style={{fontSize:16, width:'80%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</Text>
                    </View>
                    <View style={{flexDirection:'row', width:'85%',justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                        <Image
                            source={require("../img/Home/tick.png")}
                            style={{ width: 23, height:23, borderRadius:4 }}
                        />
                    <Text style={{fontSize:16, width:'80%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</Text>
                    </View>
                </View>
                
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%', height:hightDetailVoucher}}>
                    <View>
                        <Text style={{fontSize:11}}>Mã ưu đãi</Text>
                        <Text style={{fontWeight:'700',fontSize:12}}>{data[route.params.data].nameVoucher}</Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{fontSize:11}}>Hạn sử dụng</Text>
                        <Text style={{fontWeight:'700',fontSize:12}}>{data[route.params.data].date}</Text>
                    </View>
                </View>
                <TouchableOpacity
                onPress={() => {
                    if(textBtn==='Nhận ưu đãi'){
                       setScreenAccess('absolute') 
                    }else if(textBtn==='Sử dụng'){
                        setQR('absolute')
                    }
                    
                }}
                style={{width:'90%', backgroundColor:backgroundBtn,height: 48,borderRadius:27, justifyContent:'center', alignItems:'center',marginTop:20, marginBottom:20}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#fff'}}>{textBtn}</Text>
                </TouchableOpacity>
                <FadeInView
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#41D3CF',
          position:textOpacity,
          top:'90%',
          justifyContent:'center', alignItems:'center'
        }}>
        <Text style={{fontSize: 16, textAlign: 'center',fontWeight:'700', lineHeight:24, color:'#fff'}}>
          Ưu đãi đa được tặng
        </Text>
        <Text style={{fontSize: 14, textAlign: 'center',fontWeight:'400', lineHeight:24, color:'#fff'}}>Quý khách vui lòng tham khảo các ưu đĩa của ITel</Text>
      </FadeInView>
            </View>
            {/*Choose  */} 
            <View style={{width:'100%',height:'100%', position:effectScreen,backgroundColor:'#00000070'}}>
            <TouchableOpacity 
                onPress={( )=> {
                    setEffectScreen('relative')
                }}
            style={{ height:434}}>

            </TouchableOpacity>
            <View style={{borderRadius:20,backgroundColor:'#fff', width:'100%', height:'45%', alignItems:'center', justifyContent:'flex-end'}}>
                
                <View style={{width:'85%', height: '87%',backgroundColor:'#fff', alignItems:'center'}}>
                    <Image
                        source={require("../img/Home/true.png")}
                        style={{ width: 67, height:imgTrue}}
                    />
                    <Image
                        source={require("../img/Home/false.png")}
                        style={{ width: 67, height:imgFalse}}
                    />
                    <Text style={{fontSize:24, fontWeight:'700', lineHeight:41, marginTop: 23,}}>Xác nhận đổi điểm</Text>
                    
                    <Text style={{textAlign:'center', width:'65%'}}>{text}</Text>

                    <View style={{width:'100%', flexDirection:'row', justifyContent:'center', marginTop:25}}>
                        
                        <TouchableOpacity
                            onPress={() =>{
                                if(btn=="Về trang chủ"){
                                    setEffectScreen('relative')
                                    setTextOpacity('absolute')
                                    setBackgroundBtn('#3F3F3F')
                                }else if(btn =='Thử lại'){
                                    setEffectScreen('relative')
                                    setScreenOTP('absolute')
                                }
                            }}
                        style={{width:'70%', height: 40,backgroundColor:'#FF2424',justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:2, borderRadius:27}}>
                            <Text style={{fontWeight:'700', fontSize:16, color:'#fff'}}>{btn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            

            </View>
            </View>

            <View style={{width:'100%',height:'100%', position:giveData,backgroundColor:'#00000070'}}>
            <TouchableOpacity 
                onPress={( )=> {
                    setGiveData('relative')
                }}
            style={{ height:434}}>

            </TouchableOpacity>
            <View style={{borderRadius:20,backgroundColor:'#fff', width:'100%', height:'45%', alignItems:'center', justifyContent:'flex-end'}}>
                
                <View style={{width:'85%', height: '87%',backgroundColor:'#fff', alignItems:'center'}}>
                    <Image
                        source={require("../img/Home/true.png")}
                        style={{ width: 67, height:67}}
                    />

                    <Text style={{fontSize:24, fontWeight:'700', lineHeight:41, marginTop: 23}}>Xác nhận đổi điểm</Text>
                    
                    <Text style={{textAlign:'center', width:'65%'}}>Mã ưu đãi Voucher Giảm 15% trên hóa đơn của khách hàng là:</Text>
                    <Text style={{fontWeight:'700', fontSize:20}}>2TAL2345236523AF</Text>
                    <Text style={{textAlign:'center', width:'65%'}}>Bạn vui lòng sử dụng trước ngày15/07/2021 23:59:00. LH Hotline</Text>

                    <View style={{width:'100%', flexDirection:'row', justifyContent:'center', marginTop:25}}>
                        
                        <TouchableOpacity
                            onPress={() =>{
                                setHightDetailVoucher('auto')
                                setGiveData('relative')
                                setTextBtn('Sử dụng')
                            }}
                        style={{width:'70%', height: 40,backgroundColor:'#FF2424',justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:2, borderRadius:27}}>
                            <Text style={{fontWeight:'700', fontSize:16, color:'#fff'}}>Chi tiết ưu đãi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            

            </View>
            </View>
           
            {/*Access */}
            <View style={{width:'100%',height:'100%', position:screenAccess,backgroundColor:'#00000070'}}>
            <TouchableOpacity 
                onPress={( )=> {
                    setScreenAccess('relative')
                }}
            style={{ height:434}}>

            </TouchableOpacity>
            <View style={{borderRadius:20,backgroundColor:'#fff', width:'100%', height:'45%', alignItems:'center', justifyContent:'flex-end'}}>
                
                <View style={{width:'85%', height: '87%',backgroundColor:'#fff', alignItems:'center'}}>
                    <Image
                        source={require("../img/Home/choosevoucher.png")}
                        style={{ width: 67, height:67}}
                    />
                    <Text style={{fontSize:24, fontWeight:'700', lineHeight:41, marginTop: 23,}}>Xác nhận đổi điểm</Text>
                    <View style={{flexDirection:'row', width:'90%', justifyContent:'space-around', alignItems:'center', marginTop:5,}}>
                        <Text style={styles.textPoin}>{data[route.params.data].poin} điểm</Text>
                        <Image
                            source={require("../img/Home/change.png")}
                            style={{ width: 46, height:30}}
                        />
                        <Text style={styles.textPoin}>{data[route.params.data].poin*1000}đ</Text>
                    </View>
                    <Text style={{textAlign:'center', width:'65%'}}>Điểm sẽ được trừ vào tổng điểm tích lũy của iTel Club</Text>

                    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginTop:25}}>
                        <TouchableOpacity
                            onPress={() => {
                                setScreenPhone('absolute')
                            }}
                        style={{width:'45%', height: 40,justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:2, borderRadius:27}}>
                            <Text style={{fontWeight:'700', fontSize:16, color:'red'}}>Gửi tặng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setGiveData('absolute')
                                setScreenAccess('relative')
                            }}
                        style={{width:'45%', height: 40,backgroundColor:'#FF2424',justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:2, borderRadius:27}}>
                            <Text style={{fontWeight:'700', fontSize:16, color:'#fff'}}>Lấy ưu đãi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            

            </View>
            </View>
            {/*PhoneNumber */} 
            <View style={{width:'100%',height:'100%', position:screenPhone,backgroundColor:'#00000070'}}>
            <TouchableOpacity 
                onPress={( )=> {
                    setScreenPhone('relative')
                }}
            style={{ height:434}}>

            </TouchableOpacity>
            <View style={{borderRadius:20,backgroundColor:'#f7f2f2', width:'100%', height:'45%', alignItems:'center', justifyContent:'flex-end'}}>
                <View style={{width:'85%', height: '87%', alignItems:'center'}}>
                    <Text style={{fontSize:24, fontWeight:'700', lineHeight:41}}>Gửi tặng ưu đãi</Text>
                    <Text style={{textAlign:'center', width:'80%'}}>Bạn vui lòng nhập số điện thoại (iTel) muốn gửi tặng ưu đãi</Text>
                    <View
                  style={{
                    flexDirection: "row",
                    height: 58,
                    backgroundColor: "white",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "center",
                    marginTop:22
                  }}
                >
                  <Image
                    source={require("../img/phone.jpg")}
                    style={{ width: 14.37, height: 23.24 }}
                    resizeMode="stretch"
                  />
                  
                  <TextInput
                    placeholder={'Số điện thoại'}
                    placeholderTextColor={"black"}
                    style={{ width: "75%", textAlign: "center", fontSize: 20 }}
                    value={number}
                    onChangeText={setNumber}
                    
                  />
                </View>
                <TouchableOpacity
                onPress={() => {
                    let dem=0
                    for(let i=0;i<data.length;i++){
                        if(data[i].phonenumber===number){
                            dem=dem+1
                            setA(i)
                        }else{
                            dem=dem+0
                        }
                    }
                    if(dem>0){
                        setScreenOTP('absolute')
                    setScreenPhone('relative')
                    setScreenAccess('relative')
                    setTextBtn('Đã nhận ưu đãi')
                    }else{
                        alert("số điện thoại không hợp lệ")
                    }
                    
                }}
                style={{height:48, width:'80%', backgroundColor:'red', justifyContent:'center',alignItems:'center', borderRadius:27, marginTop:10}}>
                    <Text style={{fontWeight:'700', fontSize:16,color:'#fff'}}>Tiếp tục</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
             {/*OTP */}
             <View style={{width:'100%', height:'100%',backgroundColor:'red' ,justifyContent:'center', alignItems:'center',backgroundColor:'#00000070', position:screenOTP}} >
                <View style={{width:'100%', height:'10%'}} onTouchStart={()=>{
                setScreenOTP('relative')
            }}>

                </View>
                <View style={{width:'95%', height:'40%', backgroundColor:'#fff', alignItems:'center'}}>
                    <Text style={{fontWeight:'700', fontSize:20,marginTop:25}}>Xác nhận OTP</Text>
                    <Text style={{width:'50%', textAlign:'center', paddingBottom:10, paddingTop:10}}>Bạn vui lòng nhập mã OTP để xác nhận tặng ưu đãi cho  thuê bao {data[route.params.data].phonenumber}</Text>
                    <TextInput placeholder='Nhập mã OTP' value={numberOTP}
                    onChangeText={setNumberOTP} style={{borderWidth:1,marginTop: 10, width:'80%', height:61, borderRadius:20, textAlign:'center'}}>
                    </TextInput>

                    <Text style={{marginTop:10,}}>Gửi lại OTP</Text>
                    <TouchableOpacity
                    onPress={() => {
                        setEffectScreen('absolute')
                        setScreenOTP('relative')
                        if(numberOTP==data[a].otp){
                            console.log(true)
                            setImgTrue(67)
                            setImgFalse(0)
                            setText('Quý khách đã gửi tặng ưu đãi thành công cho thuê bao 087777766')
                            setBtn('Về trang chủ')
                        }else{
                            console.log(false)
                            setImgTrue(0)
                            setImgFalse(67)
                            setText('Số điện thoại Quý khách nhập không đúng, vui lòng kiểm tra lại.Để được hỗ trợ, vui lòng liên hệ hotline 0877087087 (miễn cước thuê bao iTel)' )
                            setBtn('Thử lại')
                        }
                        
                    }}
                    style={{marginTop:30,width:'80%', height:48,backgroundColor:'#ED1F24', borderRadius:27, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, fontWeight:'700', color:'#fff'}}>Gửi mã</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{width:'100%',height:'100%', position:QR,backgroundColor:'#00000070'}}>
            <TouchableOpacity 
                onPress={( )=> {
                    setQR('relative')
                }}
            style={{ height:300}}>

            </TouchableOpacity>
            <View style={{borderRadius:20,backgroundColor:'#fff', width:'100%',marginBottom:10, height:'65%', alignItems:'center', justifyContent:'flex-end'}}>
                
                <View style={{width:'85%', height: '87%',backgroundColor:'#fff', alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'700'}}>Nhận ưu đãi thành công</Text>
                    <Image
                        source={require("../img/Home/logoQR.png")}
                        style={{ width: 167, height:57}}
                    />
                    <Image
                        source={require("../img/Home/QR.png")}
                        style={{ width: 353, height:70}}
                    />

                    <Text style={{fontSize:24, fontWeight:'700', lineHeight:41, marginTop: 23}}>{data[route.params.data].nameVoucher}</Text>
                    
                    <Text style={{textAlign:'center', width:'80%'}}>Bạn vui lòng đưa trực tiếp voucher trên web/app/tin nhắn cho nhân viên khi thanh toán
 (không đưa ảnh chụp màn hình)</Text>
                    <Text style={{fontWeight:'700', fontSize:16}}>Hạn sử dụng : {data[route.params.data].date}</Text>
                    <Text style={{textAlign:'center', width:'65%',fontWeight:'700'}}>Hotline: 1900 299 232</Text>

                    <View style={{width:'100%', flexDirection:'row', justifyContent:'center', marginTop:25}}>
                        
                        <TouchableOpacity
                            onPress={() =>{
                                navigation.navigate('Main')
                            }}
                        style={{width:'70%', height: 40,backgroundColor:'#FF2424',justifyContent:'center', alignItems:'center', borderColor:'red', borderWidth:2, borderRadius:27,}}>
                            <Text style={{fontWeight:'700', fontSize:16, color:'#fff'}}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            

            </View>
            </View>
            
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
container:{
    width:'100%',
    alignItems:'center'
},
textPoin:{
    fontSize : 20 ,
    color:'red',
    fontWeight:'700',
    lineHeight:23.44
}
})