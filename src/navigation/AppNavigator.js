import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//redux
import {Provider} from 'react-redux';
import store from '../store';

//tab
import TabNavigator from './tab/TabNavigator';

//navigation
import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
