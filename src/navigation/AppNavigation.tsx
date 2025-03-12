import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome from "react-native-vector-icons/FontAwesome"

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
            iconName = 'compass';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user';
          }

          const customizeSize = RFValue(20);
          return (
            <FontAwesome
              name={iconName}
              size={customizeSize}
              color={focused ? '#121212' : 'gray'}
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