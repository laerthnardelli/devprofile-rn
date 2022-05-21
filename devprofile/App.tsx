import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { AuthContext } from './src/context/AuthContext';

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
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ name: 'Laerth' }}>
          <Routes />
        </AuthContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
