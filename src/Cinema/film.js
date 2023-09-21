import React, { Component, useState, useEffect, useRef, F } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import ItemCinema from "./itemCinema";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import filter from "lodash.filter";
import Video from 'react-native-video';
export default Film = ({ navigation, route }) => {
  const [choose, setChoose] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() =>{
              navigation.goBack();
            }}>
              <Image source={require("../img/Home/Back.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={styles.banner}
          >
            {/* <Video source={{uri: "https://www.google.com/search?q=nguoi+mien+nui+chat&oq=nguoi+mien+nui+chat&aqs=chrome..69i57j0i512l2j69i64j0i3j0i512j0i22i30j69i60.3946j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:2f5bdcbd,vid:xVtkkHfrqPs,st:0"}}   // Can be a URL or a local file.
        />  */}

          </View>
          <View style={styles.filmName}>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}>
              {route.params}
            </Text>
            <Text style={{ color: "rgba(109, 109, 109, 1)" }}>
              Korean 2015 16 chaps
            </Text>
          </View>
          <TouchableOpacity style={styles.btnPlay}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "18%",
              }}
            >
              <Image
                source={require("../img/Cinema/Vector.png")}
                style={{ width: 16, height: 18, marginTop: 2 }}
              />
              <Text style={{ fontSize: 16, fontWeight: "800", color: "#fff" }}>
                PLAY
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              width: "80%",
              textAlign: "left",
              color: "#fff",
              marginTop: 22,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Text>
          <Text
            style={{
              color: "rgba(109, 109, 109, 1)",
              textAlign: "left",
              width: "80%",
              marginTop: 29,
            }}
          >
            Đạo diễn <Text style={{ color: "#fff" }}>Xuân phước</Text>
          </Text>
          <Text
            style={{
              color: "rgba(109, 109, 109, 1)",
              textAlign: "left",
              width: "80%",
              marginTop: 25,
            }}
          >
            Diễn viên{" "}
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Dương Cẩm Linh, Lương Thế Thành Huy Cường, Thiên Hương
            </Text>
          </Text>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setChoose(1);
              }}
            >
              {choose === 1 ? (
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  Các tập
                </Text>
              ) : (
                <Text style={{ color: "#ccc" }}>Các tập</Text>
              )}
              {choose === 1 ? (
                <View style={{ height: 3, backgroundColor: "red" }}></View>
              ) : (
                <View></View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setChoose(2);
              }}
            >
              {choose === 2 ? (
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  Nội dung tương tư
                </Text>
              ) : (
                <Text style={{ color: "#ccc" }}>Nội dung tương tư</Text>
              )}
              {choose === 2 ? (
                <View style={{ height: 3, backgroundColor: "red" }}></View>
              ) : (
                <View></View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setChoose(3);
              }}
            >
              {choose === 3 ? (
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  Trailer
                </Text>
              ) : (
                <Text style={{ color: "#ccc" }}>Trailer</Text>
              )}
              {choose === 3 ? (
                <View style={{ height: 3, backgroundColor: "red" }}></View>
              ) : (
                <View></View>
              )}
            </TouchableOpacity>
          </View>
          <View style={{width: '100%',marginTop:30,alignItems:'center'}}>
          {choose == 1 ? (
            <View style={styles.chaps}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#red",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 112, height: 73 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
                <Image
                  source={require("../img/Cinema/playFilm.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#red",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 112, height: 73 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
                <Image
                  source={require("../img/Cinema/playFilm.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#red",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 112, height: 73 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
                <Image
                  source={require("../img/Cinema/playFilm.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#red",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 112, height: 73 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
                <Image
                  source={require("../img/Cinema/playFilm.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ width: 0, height: 0 }}></View>
          )}
          {choose == 2 ? (
            <View style={styles.contentOthers}>
              <TouchableOpacity
                style={{
                  width: "50%",
                  backgroundColor: "#red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 162, height: 108 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  backgroundColor: "#red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 162, height: 108 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  backgroundColor: "#red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 162, height: 108 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "50%",
                  backgroundColor: "#red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: 162, height: 108 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  {route.params}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ width: 0, height: 0 }}></View>
          )}
          {choose == 3 ? (
            <View style={styles.chaps}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#red",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("../img/Cinema/film.png")}
                  style={{ width: "100%", height: 194 }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 16,
                    color: "gray",
                    fontWeight: "700",
                    textAlign: "left",
                    width: "100%",
                    marginTop: 5,
                  }}
                >
                  {route.params}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ width: 0, height: 0 }}></View>
          )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingBottom: 50,
    top: 50,
  },
  header: {
    width: "90%",
  },
  filmName: {
    width: "90%",
    marginTop: 17,
  },
  btnPlay: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    backgroundColor: "rgba(rgba(229, 9, 20, 1))",
    borderRadius: 80,
    marginTop: 22,
  },
  chaps: {
    width: "90%",
  },
  contentOthers: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  banner:{
      backgroundColor: "#fff",
      height: 243,
      width: "100%",
      marginTop: 25,
  },

});
