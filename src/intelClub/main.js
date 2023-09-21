import React, { Component, useState, useEffect, useRef } from "react";
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createContext, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
  DrawerLayoutAndroid
} from "react-native";
import ItemClub from '../intelClub/itemClub';
import Introduce from "./introduce";
export default Main = ({navigation}) => {
  const [drawerPosition, setDrawerPosition] = useState('left');
  const [ColorLeft,setColorLeft]= useState('#EC1D22')
  const [ColorRight,setColorRight]= useState('#E8E8E8')
  const [weightLeft,setWeightLeft]= useState(700)
  const [weightRight,setWeightRight]= useState(400)
  const [voucherVip,setVoucherVip] = useState('0%')
  const [voucher,setVoucher] = useState('100%')
  const drawer = useRef(null);
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
  
  const [textVoucher , setTextVoucher] = useState('Ưu đãi tương ứng với hạng hội viên của bạn')
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{width:'100%'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={{justifyContent:'center', alignItems:'flex-start', height:60,  borderColor:'#ccc', borderWidth:1, marginBottom:10,alignItems:'center'}}>
                <Text style={styles.text}>Home</Text>
            </View>
        </TouchableOpacity>
        
      </View>
      <Button
        title="Đăng xuất"
        onPress={() => 
            Alert.alert(
                'Thông báo!',
                'Bạn có chắc muốn đăng xuất không?',
                [
                  {
                    text: 'Đăng xuất',
                    onPress: () => navigation.navigate('Login')
                  },
                  {
                      text: 'Quay lại',
                      onPress: () => null
                      
                    },
                ],
                
              )
        }
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
                        ref={drawer}
                        drawerWidth={300}
                        drawerPosition={drawerPosition}
                        renderNavigationView={navigationView}
                        >
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.header}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              top: 38,
            }}
          >
            <TouchableOpacity style={{ height: "100%", marginLeft: 17 }}>
              <Image
                source={require("../img/Home/bell.png")}
                style={{ width: 22, height: 20 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}}>
            <Image
                source={require("../img/Home/logoclub.png")}
                style={{ width: 19, height: 26,marginRight:6, }}
                resizeMode="stretch"
              />
              <Text style={{fontSize:20,fontWeight:'900', lineHeight:23.44, color:'#fff'}}>iTel CLUB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: "100%", marginRight: 13 }} onPress={() => drawer.current.openDrawer()}>
              <Image
                source={require("../img/menu.png")}
                style={{ width: 22, height: 18 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width:'100%',alignItems:'center', backgroundColor:'#ED1F24',paddingTop:13, paddingBottom:13}}>
        <View style={{borderRadius:4,backgroundColor:'#D20F14',width:'90%',flexDirection:'row', paddingBottom:10,paddingTop:10}}>
            <View style={{width:'50%', justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
            <Image
                source={require("../img/Home/phone.jpg")}
                style={{ width: 9.63, height: 15.26 }}
                resizeMode="stretch"
              />
                <View style={{marginLeft:7}}>
                    <Text style={{fontSize:16, fontWeight:'700', color:'#fff',lineHeight:18.75}}>0873 838 838</Text>
                    <Text style={{fontSize:14, fontWeight:'400', color:'#fff',lineHeight:16.41}}>Nguyễn Trí Thông</Text>
                </View>
            </View>
            <View style={{width:'50%', flexDirection:'row', justifyContent:'center'}}>
                <View style={{borderRadius:5,width:44,height:44,backgroundColor:'#fff',justifyContent:'center', alignItems:'center', marginRight:9,}}>
                    <Image
                    source={require("../img/Home/itelclubred.png")}
                    style={{ width: 18, height: 25 }}
                    resizeMode="stretch"
                />
                </View>

                <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:17, fontWeight:'700', color:'#fff',lineHeight:22}}>Hạng bạc</Text>
                    <Text style={{fontSize:11, fontWeight:'400', color:'#fff',lineHeight:13}}>773 điểm</Text>
                </View>
            </View>
        </View>
        </View>

        <View style={{width: '100%', alignItems:'center', paddingBottom:15}}>
        <View style={{flexDirection:'row', width:'95%', justifyContent:'space-between',marginTop:13}}>
            <TouchableOpacity style={{width:167, height: 97,backgroundColor:'#fff', justifyContent:'center', alignItems:'center'} } onPress={()=>{navigation.navigate('Introduce')}} >
            <Image
                source={require("../img/Home/Frame.png")}
                style={{ width: 57, height: 39 }}
                resizeMode="stretch"
              />
              <Text style={{color:'#3F3F3F',fontSize:14, marginTop:12 ,}}>
                Giới thiệu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('Voucher')
            }}
            style={{width:167, height: 97,backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
            <Image
                source={require("../img/Home/Group.png")}
                style={{ width: 35.22, height: 35.3 }}
                resizeMode="stretch"
              />
              <Text style={{color:'#3F3F3F',fontSize:14, marginTop:12 ,}}>
                Ưu đãi đã nhận
              </Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{width:'100%', backgroundColor:'#fff', alignItems:'center',paddingBottom:21 }}>
        <Image
                source={require("../img/Home/Mask.jpg")}
                style={{ width:'100%', height: 170 }}
                resizeMode="stretch"
              />
               <View style={{width: '80%'}}>
              <Text
              style={{
                width: "90%",
                textAlign: "left",
                color: "#B4B4B4",
                marginTop: 14,
              }}
            >
              <Text style={{ fontWeight: "700", color: "#3F3F3F" }}>
                Mùa Game lớn nhất năm - DATA giảm 50%{" "}
              </Text>
              Quảng cáo chương trình
            </Text>
            </View>
              </View>

              <View style={{flexDirection:'row', width:'100%',backgroundColor:'#fff'}}>
                <TouchableOpacity style={{alignItems:'center', width:'50%'}} onPress={()=>{
                  setColorLeft('#EC1D22')
                  setColorRight('#E8E8E8')
                  setWeightLeft(700)
                  setWeightRight(400)
                  setVoucherVip('0%')
                  setVoucher('100%')
                  setTextVoucher('Ưu đãi tương ứng với hạng hội viên của bạn')
                }}>
                    <Text style={{fontWeight:weightLeft}}>Ưu đãi dành cho bạn </Text>
                    <View style={{height:2,width:'100%',backgroundColor:ColorLeft}}></View>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center', width:'50%'}} onPress={()=>{
                  setColorLeft('#E8E8E8')
                  setColorRight('#EC1D22')
                  setWeightLeft(400)
                  setWeightRight(700)
                  setVoucherVip('100%')
                  setVoucher('0%')
                  setTextVoucher('Các ưu đãi dành cho hội viên Kim Cương')
                }}>
                    <Text style={{fontWeight:weightRight}}>Ưu đãi VIP </Text>
                    <View style={{height:2,width:'100%',backgroundColor:ColorRight}}></View>
                </TouchableOpacity>
              </View>

                <View style={{alignItems:'center', marginTop:21}}>
                  <View style={{width:'90%', flexDirection:'row', justifyContent:'space-between'}}>
                      <TouchableOpacity style={styles.voucher}>
                        <Text style={{fontSize: 13,fontWeight:'300'}}>Khu vực</Text>
                        <Image
                          source={require("../img/Home/down.png")}
                          style={{ width: 9, height: 5 }}
                          resizeMode="stretch"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', height:50, borderColor:"#E4E4E499", borderWidth:1, justifyContent:'space-around', width:133}}>
                        <Text style={{fontSize: 13,fontWeight:'300'}}>Điểm quy đổi </Text>
                        <Image
                          source={require("../img/Home/down.png")}
                          style={{ width: 9, height: 5 }}
                          resizeMode="stretch"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.voucher}>
                        <Text style={{fontSize: 13,fontWeight:'300'}}>Phân loại</Text>
                        <Image
                          source={require("../img/Home/down.png")}
                          style={{ width: 9, height: 5 }}
                          resizeMode="stretch"
                        />
                      </TouchableOpacity>
                  </View>
                  <Text style={{textAlign:'left', width:'90%', marginTop:8 , marginBottom:15,color:'#3B3B3B'}}>
                    {textVoucher}
                </Text>
                </View>

                <View>
                
              </View>
              <View style={{width:'100%',alignItems:'center', flexDirection:'row'}}>
                  <View style={{width:voucher, flexDirection:'row', backgroundColor:'green', flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'90%', flexDirection:'row', backgroundColor:'green', flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                    </View>  
                  </View>

                  <View style={{width:voucherVip, flexDirection:'row', flexWrap:'wrap',alignItems:'center',justifyContent:'center', backgroundColor:'red'}}>
                    <View style={{width:'90%', flexDirection:'row', backgroundColor:'red', flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                      <ItemClub />
                    </View>  
                  </View>
              </View>

              <View style={{ width: "100%", alignItems: "flex-end" }}>
              <Image
                source={require("../img/Home/iconfooter.png")}
                style={{ width: 51, height: 51, marginRight: 5 }}
              />
            </View>

            <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../img/Home/home.png")}
                style={{ width: 21, height: 17.85, marginBottom: 5 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 13,
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                Trang chủ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../img/Home/message_24px.png")}
                style={{ width: 18, height: 18, marginBottom: 5 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 13,
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                Hỗ trợ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../img/Home/Frame.png")}
                style={{ width: 55, height: 37, marginBottom: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../img/Home/perm_identity_24px.png")}
                style={{ width: 18, height: 18, marginBottom: 5 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 13,
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                Tài khoản
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../img/menu.png")}
                style={{ width: 18.33, height: 11, marginBottom: 5 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 13,
                  textAlign: "center",
                  color: "#999999",
                }}
              >
                Menu
              </Text>
            </TouchableOpacity>
          </View>
              
      </ScrollView>
    </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ED1F24",
    height: 70,
    alignItems: "center",
  },
  boxItemMenu: {
    alignItems: "center",
    marginLeft: 28,
  },
  item:{
    width:'45%',
    alignItems:'center',
    backgroundColor:'#fff',
    shadowColor: 'black',
    shadowRadius:10,
    marginBottom: 15,
},
voucher:{
  flexDirection:'row', alignItems:'center', height:50, borderColor:"#E4E4E499", borderWidth:1, justifyContent:'space-around', width:100
},
footer: {
  width: "100%",
  height: 70,
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-around",
},
container: {
  marginTop: 30,
  flex: 1,
  alignItems: 'center',
  justifyContent:'space-between',
  padding: 16,
},
navigationContainer: {
  backgroundColor: '#ecf0f1',
},
});
