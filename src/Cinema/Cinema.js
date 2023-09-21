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
import Film from '../Cinema/film';
export default Cinema = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    fetch("https://64d08f7cff953154bb791252.mockapi.io/api/v1/voucher")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.nameVoucher
          ? item.nameVoucher.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({ item }) => {
    return (
      // Flat List Item

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        onPress={() => {
          navigation.navigate("Film", item.nameVoucher)
        }}
      >
        <Image source={{ uri: item.film }} style={{ width: 112, height: 73 }} />
        <Text style={{ color: "#fff" }}>{item.nameVoucher}</Text>
        <Image
          source={require("../img/Cinema/watch.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.nameVoucher);
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://64d08f7cff953154bb791252.mockapi.io/api/v1/voucher").then(
        (res) => res.json()
      ),
  });
  const Item = ({ film, nameVoucher }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() =>{
        navigation.navigate('Film', nameVoucher)
      }}>
        <Image source={{ uri: film }} style={{ width: 104, height: 156 }} />
        <View style={{ flexDirection: "row", width: "90%" }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              color: "gray",
              marginTop: 10,
            }}
          >
            {nameVoucher}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemViralFilm = ({ viralfilm, nameVoucher }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image
          source={{ uri: viralfilm }}
          style={{ width: 104, height: 156 }}
        />
        <View style={{ flexDirection: "row", width: "90%" }}>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 16,
              color: "gray",
              marginTop: 10,
            }}
          >
            {nameVoucher}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [searchOpen, setSearchOpen] = useState(0);
  const [searchOpenOn, setSearchOpenOn] = useState("relative");
  const [textSearch, setTextSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require("../img/Cinema/header.png")}
            resizeMode="cover"
            style={{ width: "100%", height: 564, alignItems: "center" }}
          >
            <LinearGradient
              // Background Linear Gradient
              start={{ x: 0, y: 0.4 }}
              end={{ x: 0, y: 0 }}
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
              style={styles.background}
            />
            <View style={styles.overlay}></View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  source={require("../img/Home/Back.png")}
                  style={{ width: 6, height: 12 }}
                />
              </TouchableOpacity>

              <View style={styles.search}>
                <TextInput
                  placeholder="Nhập từ khóa"
                  style={{ width: "85%" }}
                  placeholderTextColor={"lightgray"}
                  color={"lightgray"}
                  onPressIn={() => {
                    setSearchOpen(400), setSearchOpenOn("absolute");
                  }}
                  onChangeText={(text) => searchFilterFunction(text)}
                  value={search}
                />
                <TouchableOpacity>
                  <Image
                    source={require("../img/Cinema/Search.png")}
                    style={{ width: 18, height: 18 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ alignItems: "center", top: 333, width: "100%" }}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                Stranger Things 2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <View style={{ width: 20 }}></View>
                <TouchableOpacity style={styles.btnPlay}>
                  <Text style={{ color: "red", fontWeight: "700" }}>PHÁT</Text>
                  <View>
                    <Image
                      source={require("../img/Cinema/Play.png")}
                      style={{ width: 11, height: 17, marginLeft: 8 }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }}>
                  <Image
                    source={require("../img/Cinema/info.png")}
                    style={{ width: 15, height: 15 }}
                  />
                  <Text style={{ color: "#fff", fontSize: 12 }}>Thông tin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "90%",
              top: 100,
              height: searchOpen,
              position: searchOpenOn,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
              Tìm kiếm hàng đầu
            </Text>
            <View style={{}}>
              <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            </View>
          </View>
          <View
            style={styles.content}
            onTouchStart={() => {
              setSearchOpen(0), setSearchOpenOn("relative");
              setTextSearch("");
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                backgroundColor: "black",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
                >
                  Phim đang xem
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                  <Item film={item.film} nameVoucher={item.nameVoucher} />
                )}
                keyExtractor={(item) => item.id}
                style={{ height: 200 }}
              />
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
                >
                  Phổ biến trên iTel Cinema
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                  <ItemViralFilm
                    viralfilm={item.viralfilm}
                    nameVoucher={item.nameVoucher}
                  />
                )}
                keyExtractor={(item) => item.id}
                style={{ height: 200 }}
              />
            </View>

            <View style={{ width: "100%", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
                >
                  Phim viễn tưởng
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: "#fff" }}>Tất cả</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                  <Item film={item.film} nameVoucher={item.nameVoucher} />
                )}
                keyExtractor={(item) => item.id}
                style={{ height: 200 }}
              />
            </View>
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
  },
  header: {
    width: "100%",
    height: 40,
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  search: {
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    height: "100%",
    width: 295,
    alignItems: "center",
    justifyContent: "space-around",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  btnPlay: {
    width: 112,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    width: "90%",
    alignItems: "center",
  },
  item: {
    width: 104,
    alignItems: "center",
    borderRadius: 4,
    marginRight: 18,
    shadowColor: "black",
    shadowRadius: 10,
    paddingBottom: 15,
    backgroundColor: "black",
  },
});
