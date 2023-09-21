import React, { Component, useState, useEffect,useRef } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView ,FlatList} from 'react-native';
import { createContext, useContext } from 'react';
import{View,Text,TouchableOpacity, ImageBackground, TextInput,StyleSheet, Alert} from 'react-native';
import ItemVoucher from './itemVoucher';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";
import itemVoucher from './itemVoucher';

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <ItemVoucher nameVoucher={item.nameVoucher} date={item.date} />
  );

export default Voucher = ({navigation}) =>{
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          fetch(
            "https://64d08f7cff953154bb791252.mockapi.io/api/v1/voucher"
          ).then((res) => res.json()),
      });

      const [selectedId, setSelectedId] = useState();
      const [dataItem,setDataItem] = useState('')
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    const data = item.id === selectedId ? selectedId-1 : item.id-1;
    
    return (
        <TouchableOpacity onPress={()=>{
            setDataItem(item.id)
            navigation.navigate('DetailVoucher',{data})
            }}>
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id)}}
        backgroundColor={backgroundColor}
        textColor={color}
      /></TouchableOpacity>
    );
  };
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
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

                <View style={{width:'100%', alignItems:'center', marginTop:20}}>
                   
                <View
        
        style={{width:'90%', height:'100%',justifyContent:'center', borderColor:'#0000001A', borderWidth:1, borderRadius:4, marginBottom:10,}}> 
            <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>
                        
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        },

})