import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {



  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        tabBarShowLabel: false, tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? RFValue(8) : RFValue(12),
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          // backgroundColor: 'transparent',
          height: Platform.OS === 'android' ? 80 : 80,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'DiscoverScreen') {
            iconName = 'compass-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'person';
          }

          const customizeSize = RFValue(20);
          return (
            <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? '#12121' : '#7C7C7C'}
            />
          );
        },
      })}
    >
      <Tab.Screen name='DiscoverScreen' component={DiscoverScreen} options={{ headerShown: false }} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}



const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabNavigator' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})