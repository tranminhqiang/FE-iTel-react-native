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
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemData from "./itemdata";
import ItemITelClub from "./itemITelClub";
import ItemGame from "./itemgame";
import ItemCinema from "./itemcinema";
import Main from "./intelClub/main";
import BASE_URL from './constants/index'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import axios from 'axios';

const useGetCurrentUser = (id) => {
  return useQuery(
    ["get-userinfo", id],
    () => axios.get(BASE_URL + "PhoneNumber/" + id),
    {
      enabled: !!id,
    }
  );
};

export default Home = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("relative");
  const [avatarClicked, setAvatarClicked] = useState("absolute");
  const [showData, setShowData] = useState("absolute");
  const [show, setShow] = useState(1);
  const [right, setRight] = useState(10);
  // AsyncStorage.getItem('userInfo', (err, result) => {
  //     console.log(result);
  //   });
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://64d08f7cff953154bb791252.mockapi.io/api/v1/PhoneNumber"
      ).then((res) => res.json()),
  });
  const { userInfo:userInfoData } = useGetUserInfo();
  const { userInfo: {id} } = useGetUserInfo();
  const {data: userInfo } = useGetCurrentUser(id)
  const [typeData, setTypeData] = useState(data[route.params.user - 1].typeData);
  const [moneyNow,setMoneyNow] = useState(data[route.params.user - 1].money)
  return (
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
                source={require("../src/img/Home/bell.png")}
                style={{ width: 22, height: 20 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: "100%", marginRight: 13 }}>
              <Image
                source={require("../src/img/menu.png")}
                style={{ width: 22, height: 18 }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            {/*infor user */}
            <TouchableOpacity
              onPress={() => {
                setAvatar("relative");
                setAvatarClicked("absolute");
                setShowData("absolute");
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 200,
                  position: avatarClicked,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    backgroundColor: "red",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "90%",
                      backgroundColor: "#D20F14",
                      height: 44,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 4,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../src/img/Home/phone.jpg")}
                        style={{ width: 9.63, height: 14.42 }}
                        resizeMode="stretch"
                      />
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "#fff",
                          lineHeight: 18.75,
                          marginLeft: 8,
                        }}
                      >
                        {data[route.params.user].nameUser}
                      </Text>
                    </View>
                    <Text
                      style={{
                        lineHeight: 16.41,
                        color: "#fff",
                        marginLeft: 15,
                      }}
                    >
                      {userInfo?.money}
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      width: "90%",
                      height: "75%",
                    }}
                  >
                    <View style={{ height: "100%" }}>
                      <View style={{ marginTop: 12 }}>
                        <Text>Tài khoản gốc</Text>
                        <Text
                          style={{
                            fontSize: 32,
                            fontWeight: "700",
                            lineHeight: 37.5,
                            color: "#fff",
                            marginTop: 1,
                          }}
                        >
                          {moneyNow + "đ"}
                        </Text>
                      </View>
                      <View>
                        <Text>Tài khoản khuyến mãi</Text>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: "700",
                            lineHeight: 28.13,
                            color: "#fff",
                          }}
                        >
                          40.000đ
                        </Text>
                      </View>
                    </View>
                    <View style={{ height: "100%" }}>
                      <TouchableOpacity onPress={() =>{
                        navigation.navigate("Money",{
                          moneyNow,
                          setMoneyNow,
                          data,
                          nameUser :data[route.params.user].nameUser,
                          user: route.params.user - 1,
                        })
                      }}>
                        <View
                          style={{
                            flexDirection: "row",
                            width: 111,
                            height: 32,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            borderRadius: 27,
                            marginTop: 35,
                          }}
                        >
                          <Image
                            source={require("../src/img/Home/coin.jpg")}
                            style={{ width: 18, height: 18 }}
                            resizeMode="stretch"
                          />
                          <Text>Nạp tiền</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          setShow(show + 1);
                          console.log(show);
                          if (show % 2 == 0) {
                            setShowData("absolute");
                            setRight(10)
                          } else {
                            setShowData("relative");
                            setRight(0)
                          }
                          
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            width: 111,
                            height: 32,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 27,
                            borderColor: "#fff",
                            borderWidth: 2,
                            marginTop: 18.25,
                          }}
                        >
                          <Text style={{ color: "#fff" }}>Tra cước</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {/*user  */}
            <View style={{ width: "100%" }}>
              <View
                style={{
                  alignItems: "center",
                  height: 110,
                  backgroundColor: "red",
                  position: avatar,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setAvatar("absolute");
                    setAvatarClicked("relative");
                  }}
                >
                  <View
                    style={{
                      width: 52,
                      height: 52,
                      backgroundColor: "#fff",
                      borderRadius: 26,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../src/img/Home/avatar.jpg")}
                      style={{ width: 36, height: 36 }}
                      resizeMode="stretch"
                    />
                  </View>
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#fff",
                    top: 12,
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Zalo/ User Name
                </Text>
              </View>
            </View>
          </View>
          {/*info data  */}
          <View style={{ height: 70, position: showData }}>
            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                backgroundColor: "#41D3CF",
                right: right,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "35%",
                  height: "100%",
                  flexDirection: "row",
                  position: showData,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ position: showData }}>
                  <Image
                    source={require("../src/img/Home/Graph.png")}
                    style={{
                      width: 26,
                      height: 26,
                      marginTop: -8,
                      marginLeft: -7,
                      marginRight: 6,
                    }}
                    resizeMode="stretch"
                  />
                </View>
                <View style={{}}>
                  <Text style={{ color: "#fff", fontSize: 13, lineHeight: 22 }}>
                    Gói cước
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      lineHeight: 22,
                      fontWeight: "600",
                    }}
                  >
                    {userInfoData.typeData}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "35%",
                  borderLeftColor: "#30A8A5",
                  borderLeftWidth: 1,
                  height: "100%",
                  flexDirection: "row",
                  position: showData,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ position: showData }}>
                  <Image
                    source={require("../src/img/Home/Chart.png")}
                    style={{
                      width: 26,
                      height: 26,
                      marginTop: -8,
                      marginRight: 6,
                    }}
                    resizeMode="stretch"
                  />
                </View>
                <View>
                  <Text style={{ color: "#fff", fontSize: 12, lineHeight: 22 }}>
                    Data còn lại
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      lineHeight: 22,
                      fontWeight: "600",
                    }}
                  >
                    {userInfoData.dataStorage}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: "30%",
                  height: "100%",
                  flexDirection: "row",
                  position: showData,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: "#fff", fontSize: 12, lineHeight: 22 }}>
                    Thời hạn
                  </Text>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      lineHeight: 22,
                      fontWeight: "600",
                    }}
                  >
                    {userInfoData.day} ngày
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/*content  */}
          <View style={{ alignItems: "center", width: "100%" }}>
            <Image
              source={require("../src/img/Home/banner.jpg")}
              style={{ width: "100%", height: 173 }}
            />
            <Text
              style={{
                width: "80%",
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
          <ScrollView horizontal style={{ marginTop: 31 }}>
            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/1.jpg")}
                  style={{ width: 36, height: 29 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 37,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Mua SIM số
              </Text>
            </View>
            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/2.jpg")}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 48,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Cập nhật TTTB
              </Text>
            </View>

            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/3.jpg")}
                  style={{ width: 32, height: 33 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 32,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Itel Game
              </Text>
            </View>

            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/4.jpg")}
                  style={{ width: 36, height: 29 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 50,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Itel Cinema
              </Text>
            </View>

            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/5.jpg")}
                  style={{ width: 28, height: 29 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 24,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Mua sắm
              </Text>
            </View>

            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/6.jpg")}
                  style={{ width: 31, height: 34 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 65,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Tài Chính Ngân Hàng
              </Text>
            </View>

            <View style={styles.boxItemMenu}>
              <TouchableOpacity
                style={{
                  width: 54,
                  height: 54,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 31.5,
                }}
              >
                <Image
                  source={require("../src/img/Home/menu/7.jpg")}
                  style={{ width: 30, height: 8 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  width: 42,
                  fontSize: 12,
                  textAlign: "center",
                  marginTop: 7,
                }}
              >
                Tiện ích khác
              </Text>
            </View>
          </ScrollView>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.headerdata}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>GÓI CƯỚC</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Data", {
                    moneyNow,
                    setMoneyNow,
                    typeData,
                    setTypeData,
                    data,
                    user: route.params.user - 1,
                  });
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "700", color: "#ED1F24" }}
                >
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>

            <ItemData style={styles.itemdata} />

            <View
              style={{
                width: 360,
                marginTop: 31,
                borderColor: "#41D3CF",
                borderRadius: 10,
                borderWidth: 2,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      lineHeight: 18.75,
                    }}
                  >
                    GAME PLACEHOLDER
                  </Text>
                  <Text style={{ fontSize: 12, lineHeight: 18 }}>
                    Lọt top 10, thưởng điểm ngay
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#3F3F3F",
                      fontWeight: "700",
                      marginTop: 16,
                    }}
                  >
                    Sàn đấu
                  </Text>
                </View>
                <View>
                  <Image
                    source={require("../src/img/Home/game/avatargame.png")}
                    style={{ width: 139.32, height: 139.32 }}
                  />
                </View>
              </View>
              {/*Game Place*/}
              <View style={{}}>
                <TouchableOpacity
                  style={styles.week}
                  onPress={() => {
                    navigation.navigate("Game");
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 48,
                      backgroundColor: "#DDFFFE",
                      marginRight: 20,
                      marginLeft: 10,
                    }}
                  ></View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#3F3F3F",
                        lineHeight: 12.1,
                      }}
                    >
                      GAME TUẦN
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "#41D3CF",
                          fontWeight: "700",
                          lineHeight: 18.75,
                        }}
                      >
                        Cuộc đua kì thú
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 14.52,
                          color: "#3F3F3F",
                        }}
                      >
                        Còn lại 4 ngày
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../src/img/Home/game/week.png")}
                    style={{
                      width: 87,
                      height: 87,
                      bottom: 5,
                      position: "absolute",
                      marginLeft: -5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.month}>
                  <View
                    style={{
                      width: 50,
                      height: 48,
                      backgroundColor: "#DDFFFE",
                      marginRight: 20,
                      marginLeft: 10,
                    }}
                  ></View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#3F3F3F",
                        lineHeight: 12.1,
                      }}
                    >
                      GAME THÁNG
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "#41D3CF",
                          fontWeight: "700",
                          lineHeight: 18.75,
                        }}
                      >
                        Nuôi cún
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 14.52,
                          color: "#3F3F3F",
                        }}
                      >
                        Còn lại 4 ngày
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require("../src/img/Home/game/month.png")}
                    style={{
                      width: 68,
                      height: 68,
                      bottom: 5,
                      position: "absolute",
                      marginLeft: -5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/*Itel Club*/}
            <View
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: 40,
                marginBottom: 54,
              }}
            >
              <View style={styles.headerClub}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../src/img/Home/logoclub.jpg")}
                    style={{ width: 21, height: 28, marginRight: 5 }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "900",
                        color: "#ED1F24",
                      }}
                    >
                      iTeL{" "}
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: "900",
                          color: "#3C3C3C",
                        }}
                      >
                        CLUB
                      </Text>
                    </Text>
                    <Text
                      style={{ color: "#3F3F3F", lineHeight: 18, fontSize: 12 }}
                    >
                      Đầy ắp ưu đãi
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Main");
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#ED1F24",
                    }}
                  >
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <ItemITelClub />
            </View>

            {/*Itel Game */}
            <View
              style={{ width: "100%", alignItems: "center", marginBottom: 54 }}
            >
              <View style={styles.headerClub}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../src/img/Home/itelgame.jpg")}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      marginTop: 5,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "900",
                        color: "#ED1F24",
                      }}
                    >
                      iTeL{" "}
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: "900",
                          color: "#3C3C3C",
                        }}
                      >
                        GAME
                      </Text>
                    </Text>
                    <Text
                      style={{ color: "#3F3F3F", lineHeight: 18, fontSize: 12 }}
                    >
                      Đua top đỉnh cao
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() =>{
                  navigation.navigate("Note")
                }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#ED1F24",
                    }}
                  >
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <ItemGame />
            </View>

            <View
              style={{ width: "100%", alignItems: "center", marginBottom: 54 }}
            >
              <View style={styles.headerClub}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../src/img/Home/cinama.jpg")}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      marginTop: 6.3,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "900",
                        color: "#ED1F24",
                      }}
                    >
                      iTeL{" "}
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: "900",
                          color: "#3C3C3C",
                        }}
                      >
                        CINEMA
                      </Text>
                    </Text>
                    <Text
                      style={{ color: "#3F3F3F", lineHeight: 18, fontSize: 12 }}
                    >
                      Giải trí đỉnh cao
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cinema')
                }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#ED1F24",
                    }}
                  >
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
              <ItemCinema />
            </View>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <Image
                source={require("../src/img/Home/iconfooter.png")}
                style={{ width: 51, height: 51, marginRight: 5 }}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../src/img/Home/home.png")}
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
                source={require("../src/img/Home/message_24px.png")}
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
                source={require("../src/img/Home/Frame.png")}
                style={{ width: 55, height: 37, marginBottom: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                source={require("../src/img/Home/perm_identity_24px.png")}
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
                source={require("../src/img/menu.png")}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    height: 70,
    alignItems: "center",
  },
  boxItemMenu: {
    alignItems: "center",
    marginLeft: 28,
  },
  headerdata: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    alignItems: "center",
  },
  week: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 311,
    alignItems: "center",
    height: 78,
  },
  month: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 311,
    alignItems: "center",
    height: 78,
    marginTop: 9,
    marginBottom: 37,
  },
  headerClub: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
