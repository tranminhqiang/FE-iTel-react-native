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


export default Note = ({navigation}) => {
    const [textInput, setTextInput] = useState('')
    const [taskList, setTaskList] = useState([])
    const handleInput = ()=>{
    setTaskList([...taskList, textInput])
    setTextInput('')
}
const Task =(props)=>{
    return(
        <TouchableOpacity
        onPress={()=>{
            Alert.alert(
                "Thông báo",
                "Bạm có chắc muốn xóa không ?", [
                    {text: 'Ok',onPress: () => {
                        let taskListTmp = [...taskList];
                        taskListTmp.splice(props.number-1, 1)
                        setTaskList(taskListTmp)
                    }},  // This will show the alert
                    {
                        text:'Cancel',
                        onPress : () =>{

                            },
                        }
                ]
            )
        }}
        style={{width: '90%',height: 50, flexDirection:'row', alignItems:'center', backgroundColor:'lightblue', paddingLeft:10, marginBottom:5}}>
            <View style={{width: 40,height: 40,backgroundColor:'#fff', borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>{props.number}</Text>
            </View>
            <View style={{marginLeft: 15,}}>
                <Text style={{fontSize:20}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

  return (

    <SafeAreaView
      style={{ flex: 1, alignItems: "center" }}
    >
      <View style={{ width: "100%", height: '100%',}}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() =>{
                navigation.goBack()
            }}>
            <Image source={require('../img/Home/Back.png')}  style={{width: 13,height: 13,}}/>
            </TouchableOpacity>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'700'}}>List sự kiện</Text>
            <TouchableOpacity>
            
            </TouchableOpacity>
        </View>
        <View style={{height: 300,alignItems:'center', marginTop:10,}}>
            {taskList.map((item, index) => {
                return (<Task key={index} title={item} number = {index+1} onDeleteTask={() => handleDeleteTask(index)}/>);
            })}
        </View>
        <View style={styles.bottom}>
            <View style={styles.input}>
                <TextInput value={textInput} onChangeText={setTextInput} placeholder="Nhập thêm sự kiện" style={styles.textinput} placeholderTextColor={'#333'} />
            </View>
            <TouchableOpacity onPress={handleInput}>
                <Image source={require('../img/note/add.png')} style={{width: 40,height: 40,}} />
            </TouchableOpacity>
            
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height:65, backgroundColor:'red',
     flexDirection: 'row',
     alignItems:'flex-end',
     paddingBottom:10,
     paddingLeft:10, justifyContent:'space-between'
  },
  input:{width: '80%',borderWidth:1, borderRadius:30, height: 50,justifyContent:'center'},
  textinput:{height: 40, fontSize:18, width: '80%',marginHorizontal:10},
  bottom:{height: '10%',width:'100%', top:'90%', alignItems:'center', flexDirection:'row', justifyContent:'space-around'}
});
