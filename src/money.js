import React, { Component, useState, useEffect, useRef } from "react";
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
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
} from "react-native";
import { useChangePhoneInfo, useFeatchData } from "./data/services/index";
import { useGetUserInfo } from "./hooks/useGetUserInfo";

export default Money = ({ navigation, route }) => {
  const { userInfo, saveUserInfo } = useGetUserInfo();
  const [money, setMoney] = useState(userInfo.money);
  const [addMoney, setAddMoney] = useState(0);
  const { data, isLoading } = useFeatchData({ money });
  const changePhoneInfo = useChangePhoneInfo();
  const [access, setAccess] = useState("absolute");
  const handleMoney = async () => {
    setMoney(userInfo.money + parseInt(addMoney));
    const res = await changePhoneInfo.mutateAsync({
      ...route.params.data[route.params.user],
      money: userInfo.money + parseInt(addMoney),
    });
    saveUserInfo(res.data);
    route.params.setMoneyNow(res.data.money);
    console.log(addMoney);
    navigation.goBack();
  };
  const [color, setColor] = useState("#fff");
  const [choose, setChoose] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: access,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "30%",
            backgroundColor: "#fff",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "700", marginTop: 10 }}>
            Chú ý !
          </Text>
          <Text style={{ marginTop: 35 }}>
            Quý khách có chắc muốn nạp tiền không ?
          </Text>
          <Text style={{ marginTop: 15 }}>Vui lòng xác nhận</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setAccess("absolute");
              }}
              style={{
                width: 100,
                height: 50,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                Quay lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleMoney}
              style={{
                width: 100,
                height: 50,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("./img/Home/Back.png")}
              style={{ width: 6, height: 12, marginLeft: 10, marginRight: 10 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 22,
                fontWeight: "700",
                color: "#fff",
              }}
            >
              Nạp tiền
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require("./img/Home/Menu (1).png")}
              style={{ width: 6, height: 12, marginLeft: 10, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Image
            source={require("./img/Home/Frame.png")}
            style={{ width: 55, height: 37, marginRight: 20 }}
          />
          <View>
            <Text style={{ fontWeight: "700" }}>Tài khoản</Text>
            <Text style={{ color: "red", fontWeight: "600" }}>
              {route.params.nameUser}
            </Text>
          </View>
        </View>
        <Text style={{ marginTop: 20, width: "80%", fontWeight:'700', fontSize:16 }}>Số tiền muốn nạp</Text>
        <TextInput
          placeholder="Điền số tiền cần nạp"
          style={styles.input}
          keyboardType="numeric"
          value={addMoney}
          onChangeText={setAddMoney}
          dataDetectorTypes={"phoneNumber"}
          onChange={() => {
            setChoose(0);
          }}
        />
        <View
          style={{
            marginTop: 20,
            width: "90%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {choose == 1 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(10000), setChoose(1);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>10.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(10000), setChoose(1);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>10.000đ</Text>
            </TouchableOpacity>
          )}

          {choose == 2 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(20000), setChoose(2);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>20.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(20000), setChoose(2);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>20.000đ</Text>
            </TouchableOpacity>
          )}

          {choose == 3 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(50000), setChoose(3);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>50.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(50000), setChoose(3);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>50.000đ</Text>
            </TouchableOpacity>
          )}

          {choose == 4 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(100000), setChoose(4);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>100.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(100000), setChoose(4);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>100.000đ</Text>
            </TouchableOpacity>
          )}

          {choose == 5 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(200000), setChoose(5);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>200.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(200000), setChoose(5);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>200.000đ</Text>
            </TouchableOpacity>
          )}

          {choose == 6 ? (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(500000), setChoose(6);
              }}
              style={styles.btnChooseMoney}
            >
              <Text>500.000đ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAddMoney(500000), setChoose(6);
              }}
              style={styles.btnNotChooseMoney}
            >
              <Text>500.000đ</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            setAccess("relative");
          }}
          style={styles.btnMoney}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 20 }}>
            Nạp tiền
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    height: 84,
    paddingTop: 40,
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
  },
  account: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    height: 80,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  input: {
    borderColor: "#3333",
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginHorizontal:10
  },
  btnMoney: {
    width: "70%",
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  btnChooseMoney: {
    height: 70,
    marginBottom: 10,
    backgroundColor: "#3333",
    width: "45%",
    marginRight: "5%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnNotChooseMoney: {
    height: 70,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "45%",
    marginRight: "5%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
