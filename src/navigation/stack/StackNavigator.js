import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from '../tab/style';

//comp
import DetailScreen from '../../pages/detail/Detail';
import ActivityScreen from '../../pages/activity/Activity';
import FormScreen from '../../pages/form/Form';

const Stack = createNativeStackNavigator();

const StackNavigator = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = [
      'StackNavigator',
      'ExpenseScreen',
      'ProfileScreen',
      'ActivityScreen',
    ];

    let routeName = getFocusedRouteNameFromRoute(route);

    if (
      showRouteName.includes(
        routeName === undefined ? 'ActivityScreen' : routeName,
      )
    ) {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          ...styles.customeTab,
        },
      });
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerTitleStyle: {
            fontSize: hp(2),
          },
          title: 'Detail',
        }}
      />
      <Stack.Screen
        name="FormScreen"
        component={FormScreen}
        options={{
          headerTitleStyle: {
            fontSize: hp(2),
          },
          title: 'Form',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
