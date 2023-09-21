import React, { Component, useState, useEffect, useRef } from "react";
import { Button, Dimensions, Image, SafeAreaView } from "react-native";
import { createContext, useContext } from "react";
import { AsyncStorage } from "react-native";
import moment from "moment";
import date from "date";
import App from "./countdown";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./constants";
import { useGetUserInfo } from "./hooks/useGetUserInfo";

const useLogin = () => {
  return useMutation((id) => axios.get(BASE_URL + 'PhoneNumber/' + id));
};

export default Login = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [look, setLook] = useState("relative");
  const [OTP, setOTP] = useState("relative");
  const [input, setInput] = useState("Nhập số điện thoại");
  const [btn, setBtn] = useState("Gửi mã OTP");
  const ThemeContext = createContext(null);
  const [next, setNext] = useState(moment().format("mm ss"));
  const [hour, setHour] = useState(moment().format("mm ss"));
  var testNumber = 0;
  var testOtp = 0;
  const [dem, setDem] = useState(0);
  const [textOtp, setTextOtp] = useState(
    "Mã OTP không đúng,Bạn vui lòng Kiểm tra và đăng nhập lại"
  );
  const [test, setTest] = useState(0);
  const then = moment(next, "mm ss");
  const now = moment();
  const countdown = moment(then - now);
  const hours = countdown.format("HH");
  const [seconds, setSeconds] = useState();
  const minutes = countdown.format("mm");
  const [user, setUser] = useState(0);
  const [textInOtp, setTextInOtp] = useState("");
  const [editTable, setEditTable] = useState(true);
  // neesu otp dung thi vap
  
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://64d08f7cff953154bb791252.mockapi.io/api/v1/PhoneNumber"
      ).then((res) => res.json()),
  });
  const login = useLogin();
  const {saveUserInfo } = useGetUserInfo()

  // The state for our timer

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button

  const App = () => {
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");
    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
        total,
        hours,
        minutes,
        seconds,
      };
    };

    const startTimer = (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        // update the timer
        // check if less than 10 then we need to
        // add '0' at the beginning of the variable
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      }
    };

    const clearTimer = (e) => {
      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next
      setTimer("00:03:00");
      // If you try to remove this line the
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };

    const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if
      // you entend to add more time
      deadline.setMinutes(deadline.getMinutes() + 3);

      return deadline;
    };

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
      clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    if (timer === "00:00:01") {
      setEditTable(true);
      setDem(0);
    }
    return timer;
  };

  // const handleLogin = async () => {
  //   console.log("0");
  //   setSeconds(countdown.format("ss"));
  //     if (input === "Nhập số điện thoại") {
  //       for (var i = 0; i < 23; i++) {
  //         if (data[i].numberPhone == number) {
  //           testNumber = testNumber + 1;
  //           setUser(user + i);
  //         } else {
  //           testNumber = testNumber + 0;
  //         }
  //       }
  //       if (testNumber == 0) {
  //         alert("Không đúng số điện thoại");
  //       } else if (hour < next) {
  //         setTest(test + 1);
  //         Alert.alert(
  //           "Chú ý!!",
  //           "Thời gian còn lại là " + minutes + "phút " + seconds + " giây",
  //           [
  //             {
  //               text: "Cancel",
  //               onPress: () => console.log(Cancel),
  //               style: "cancel",
  //             },
  //             { text: "OK", onPress: () => console.log("OK Pressed") },
  //           ]
  //         );

  //         setHour(moment().format("mm ss"));
  //       } else {
  //         setBtn("Xác nhận");
  //         setNumber("");
  //         setInput("Nhập OTP");
  //         setTextInOtp("Nhập mã OTP được gửi đến điện thoại");
  //       }
  //     } else {
  //       const resLogin = await login.mutateAsync(user)
  //       if(!resLogin.data){
  //         return
  //       }
  //       if(resLogin.data.otp == number){
  //         navigation.navigate("Home", { user });
  //       }else{
  //         setOTP("absolute");
  //         setDem(dem + 1);
  //       }
  //       console.log(resLogin.data)

  //       if (dem == 2) {
  //         setTextOtp(
  //           "Đăng nhập sai quá 3 lần, vui lòng đợi 3 phút để có thể đăng nhập lại"
  //         );
  //         setNext(moment().add(3, "minute").format("mm ss"));
  //         setInput("Nhập số điện thoại");
  //         setBtn("Gửi mã OTP");
  //         setTextInOtp(" ");
  //         setEditTable(false);
  //       }
  //     }
  //   App;
  // };

  const [userInfo, setUserInfo] = useState({
    userId: null,
    otp: null
  })
  const [isSendOtp, setSendOtp] = useState(false)

  const btnLabel = isSendOtp ? 'Đăng nhập' : 'Gửi OTP'

  const placeholderInput = isSendOtp ? 'Nhập OTP' : 'Nhập userId'


  const handleLogin = async () => {
    if(!userInfo.userId){
      return
    }
    if(!isSendOtp){
      setSendOtp(true)
      return
    }
        const resLogin = await login.mutateAsync(userInfo.userId)
        if(!resLogin.data){
          return
        }
        if(resLogin.data.otp != userInfo.otp){
          setOTP('absolute')
          setDem(dem+1)
          if (dem == 2) {
                  setTextOtp("Đăng nhập sai quá 3 lần, vui lòng đợi 3 phút để có thể đăng nhập lại");
                  setUserInfo({
                    userId: null,
                    otp: null
                  })
                  setDem(0)
                  setSendOtp(false)
        }
        }
        if(resLogin.data.otp == userInfo.otp){
          saveUserInfo(resLogin.data)
          navigation.navigate("Home", { user: resLogin?.data.id });
        }

  }

  console.log(isSendOtp, btnLabel)

  const handleChangeValue = (value) => {
      setUserInfo(prevState=> {
        return {
          ...prevState,
          [isSendOtp ? 'otp': 'userId']: value
        }
      })
  }

  console.log(userInfo)

  return (
    <ThemeContext.Provider value={look}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            backgroundColor: "#F9F9F9",
            position: look,
          }}
        >
          {/*begin Header */}
          <View style={styles.header}>
            <TouchableOpacity style={{ left: 322 }}>
              <Image
                source={require("../src/img/loginimg/cancel.jpg")}
                style={{ width: 24, height: 24 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          {/*end Header */}

          {/*begin Content */}
          <View style={styles.content}>
            <View style={styles.logo}>
              <Image
                source={require("../src/img/loginimg/logo.png")}
                style={{ width: 172, height: 71 }}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.input}>
              <View
                style={{ width: "100%", height: 113, alignItems: "center" }}
              >
                <Text
                  style={{ fontSize: 16, lineHeight: 22, color: "#5E5E5E" }}
                >
                  {textInOtp}
                </Text>
                {dem >= 3 ? (
                  <Text>
                    {/* <App /> */}
                  </Text>
                ) : (
                  <Text></Text>
                )}

                <View
                  style={{
                    flexDirection: "row",
                    height: 58,
                    backgroundColor: "white",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../src/img/phone.jpg")}
                    style={{ width: 14.37, height: 23.24 }}
                    resizeMode="stretch"
                  />

                  <TextInput
                    placeholder={placeholderInput}
                    onChangeText={handleChangeValue}
                    value={userInfo[isSendOtp ? 'otp' : 'userId']}
                    placeholderTextColor={"gray"}
                    style={{
                      backgroundColor: "#fff",
                      width: "75%",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                    editable={editTable}
                  />
                </View>

                <TouchableOpacity
                  style={styles.btnLogin}
                  disabled={!editTable}
                  onPress={handleLogin}
                >
                  <Text style={{ color: "#fff", fontSize: 20 }}>{btnLabel}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.more}>
              <View style={styles.threeG}>
                <Image
                  source={require("../src/img/loginimg/3G.jpg")}
                  style={{ width: 24, height: 24 }}
                  resizeMode="stretch"
                />
                <Text
                  style={{
                    fontWeight: "500",
                    width: "75%",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Đăng nhập bằng 3G/4G
                </Text>
              </View>
              <View style={styles.zalo}>
                <View
                  style={{
                    width: 29.62,
                    height: 29.62,
                    borderRadius: 18.31,
                    backgroundColor: "#268DFE",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontWeight: "700", fontSize: 10, color: "#fff" }}
                  >
                    Zalo
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: "500",
                    width: "75%",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Đăng nhập bằng Zalo
                </Text>
              </View>
              <View style={styles.morelogin}>
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: "#FC6A57",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 48,
                  }}
                >
                  <Image
                    source={require("../src/img/loginimg/google.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="stretch"
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      width: "50%",
                      textAlign: "center",
                    }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: "#298FFF",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 48,
                  }}
                >
                  <Image
                    source={require("../src/img/loginimg/face.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="stretch"
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      width: "60%",
                      textAlign: "center",
                    }}
                  >
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*end Content */}

          {/*begin Footer */}
          <View style={styles.footer}>
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "#2C2929",
                top: -26,
                opacity: 0.1,
              }}
            ></View>
            <Text>© copyright itel vietnam</Text>
          </View>
          {/*end Footer */}
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: OTP,
          }}
        >
          <View style={{ width: 345, height: 230, backgroundColor: "#fff" }}>
            <View
              style={{ alignItems: "flex-end", marginTop: 18, marginRight: 15 }}
            >
              <Image
                source={require("../src/img/loginimg/cancel.jpg")}
                style={{ width: 19, height: 19 }}
                resizeMode="stretch"
              />
            </View>
            <View
              style={{
                alignItems: "center",
                width: "100%",
                fontFamily: "Roboto",
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: 700, fontFamily: "Roboto" }}
              >
                Sai OTP
              </Text>
              <View
                style={{
                  width: "90%",
                  height: 70,
                  alignItems: "center",
                  top: 14,
                }}
              >
                <Text
                  style={{ width: "80%", textAlign: "center", fontSize: 16 }}
                >
                  {textOtp}
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", top: 28 }}>
              <TouchableOpacity
                style={{
                  borderRadius: 27,
                  width: 163,
                  height: 39,
                  backgroundColor: "#FF2424",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setOTP("relative");
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  Đồng ý
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: look,
          }}
        >
          <View style={{ width: 345, height: 230, backgroundColor: "#fff" }}>
            <View
              style={{ alignItems: "flex-end", marginTop: 18, marginRight: 15 }}
            >
              <Image
                source={require("../src/img/loginimg/cancel.jpg")}
                style={{ width: 19, height: 19 }}
                resizeMode="stretch"
              />
            </View>
            <View
              style={{
                alignItems: "center",
                width: "100%",
                fontFamily: "Roboto",
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: 700, fontFamily: "Roboto" }}
              >
                Đăng nhập thất bại
              </Text>
              <View
                style={{
                  width: "90%",
                  height: 70,
                  alignItems: "center",
                  top: 14,
                }}
              >
                <Text
                  style={{ width: "100%", textAlign: "center", fontSize: 16 }}
                >
                  Bạn vui lòng chat trực tiếp với iTel hoặc liên hệ hotline 0877
                  087 087 (miễn phí cước thuê bao iTel)
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", top: 28 }}>
              <TouchableOpacity
                style={{
                  borderRadius: 27,
                  width: 163,
                  height: 39,
                  backgroundColor: "#FF2424",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setLook("relative");
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  Đồng ý
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*screen fail network */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={{ width: 345, height: 230, backgroundColor: "#fff" }}>
            <View
              style={{ alignItems: "flex-end", marginTop: 18, marginRight: 15 }}
            >
              <Image
                source={require("../src/img/loginimg/cancel.jpg")}
                style={{ width: 19, height: 19 }}
                resizeMode="stretch"
              />
            </View>
            <View
              style={{
                alignItems: "center",
                width: "100%",
                fontFamily: "Roboto",
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: 700, fontFamily: "Roboto" }}
              >
                Lỗi hệ thống, kết nối
              </Text>
              <View
                style={{
                  width: "90%",
                  height: 70,
                  alignItems: "center",
                  top: 14,
                }}
              >
                <Text
                  style={{ width: "100%", textAlign: "center", fontSize: 16 }}
                >
                  Vui lòng liên hệ Fanpage @itel.fan
                </Text>
                <Text
                  style={{ width: "100%", textAlign: "center", fontSize: 16 }}
                >
                  {" "}
                  hoặc hotline 0877 087087 để được hỗ trợ
                </Text>
              </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", top: 28 }}>
              <TouchableOpacity
                style={{
                  borderRadius: 27,
                  width: 163,
                  height: 39,
                  backgroundColor: "#FF2424",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setLook("relative");
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
                >
                  Đồng ý
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*screen fail OTP */}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    top: 36,
  },
  content: {
    top: 172,
    width: "100%",
    alignItems: "center",
  },
  footer: {
    top: 330,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 73,
    opacity: 0.5,
  },
  input: {
    top: 49,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 4,
  },
  btnLogin: {
    width: "100%",
    backgroundColor: "#ED1F24",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    marginTop: 7,
  },
  more: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    top: 111,
    height: 181,
  },
  threeG: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: "white",
  },
  zalo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: "white",
  },
  morelogin: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
