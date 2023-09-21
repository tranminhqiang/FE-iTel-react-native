import React, { Component } from 'react';
import{View,Image, Text , SafeAreaView,Button,StyleSheet,ImageBackground, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Loading from './loading';
import Login from '../src/login';
import OTP from './OTP'
import Home from './home'
import Main from './intelClub/main';
import Introduce from "./intelClub/introduce";
import Voucher from './intelClub/voucher';
import DetailVoucher from './intelClub/detailVoucher';
import Data from './data/main'
import Game from './game/index';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import {AsyncStorage} from 'react-native';
import itemClub from './intelClub/itemClub';
import Cinema from './Cinema/Cinema';
import Film from './Cinema/film';
import InfoGame from './game/gameInfo';
import Money from './money';
import Note from './note/index';
const Stack = createNativeStackNavigator();
export default RootComponent = function(){

    return(        
                    <NavigationContainer>
                    {/*Code chuyển màn */}
                    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Loading" component={Loading}/>
                        <Stack.Screen name="OTP" component={OTP}/>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Main" component={Main}/>
                        <Stack.Screen name="Introduce" component={Introduce}/>
                        <Stack.Screen name="Voucher" component={Voucher}/>
                        <Stack.Screen name="DetailVoucher" component={DetailVoucher}/>
                        <Stack.Screen name="Data" component={Data}/>
                        <Stack.Screen name="Game" component={Game}/>
                        <Stack.Screen name="Cinema" component={Cinema}/>
                        <Stack.Screen name="Film" component={Film}/>
                        <Stack.Screen name="InfoGame" component={InfoGame}/>
                        <Stack.Screen name="Money" component={Money}/>
                        <Stack.Screen name="Note" component={Note}/>
                    </Stack.Navigator>

                </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    
  });