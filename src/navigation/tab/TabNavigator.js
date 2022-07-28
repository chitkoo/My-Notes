import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//tab bar style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//icons
import ActivityIcon from '@assets/icons/Activity';
import ExpenseIcon from '@assets/icons/Expense';
import ProfileIcon from '@assets/icons/Profile';

//comps
import ProfileScreen from '@pages/profile/Profile';
import FinishScreen from '@pages/finish/Finish';

import StackNavigator from '../stack/StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.customeTab,
        },
      }}>
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabelStyle: {
            ...styles.label,
          },
          title: 'Activities',
          tabBarIcon: ({focused, color, size}) => (
            <ActivityIcon
              width={wp(7)}
              height={wp(7)}
              color={focused ? '#845EC2' : '#4B4453'}
            />
          ),
          tabBarActiveTintColor: '#845EC2',
          tabBarInactiveTintColor: '#4B4453',
        }}
      />
      <Tab.Screen
        name="FinishScreen"
        component={FinishScreen}
        options={{
          tabBarLabelStyle: {
            ...styles.label,
          },
          title: 'Finish',
          tabBarIcon: ({focused, color, size}) => (
            <ExpenseIcon
              width={wp(6)}
              height={wp(6)}
              color={focused ? '#845EC2' : '#4B4453'}
            />
          ),
          tabBarActiveTintColor: '#845EC2',
          tabBarInactiveTintColor: '#4B4453',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {
            ...styles.label,
          },
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcon
              width={wp(5.6)}
              height={wp(5.6)}
              color={focused ? '#845EC2' : '#4B4453'}
            />
          ),
          tabBarActiveTintColor: '#845EC2',
          tabBarInactiveTintColor: '#4B4453',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
