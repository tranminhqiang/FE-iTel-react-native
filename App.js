import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RootComponent from './src/index'
import { createContext, useContext, useEffect } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'

const queryClient = new QueryClient()
export default function App() {

 
  return (
    <QueryClientProvider client={queryClient}>
      <RootComponent />
      </QueryClientProvider>
  );
}
