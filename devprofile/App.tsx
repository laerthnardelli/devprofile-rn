import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" translucent />
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
