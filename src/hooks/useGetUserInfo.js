import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  const handleGetUserInfo = async () => {
    const userStorage = await AsyncStorage.getItem("userInfo");
    setUserInfo(JSON.parse(userStorage));
  };

  const saveUserInfo = (data) => {
    AsyncStorage.setItem("userInfo", JSON.stringify(data));
    setUserInfo(data)
  };

  const clearUserInfo = (data) => {
    AsyncStorage.removeItem("userInfo");
  };

  return { userInfo, saveUserInfo,clearUserInfo };
};
