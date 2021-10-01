import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/view';
import ProfileScreen from '../screens/profileScreen/view';
import StoriesScreen from '../screens/storiesScreen/view';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarVisible: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <Image source={require('../assets/home.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          } else if (route.name === 'Stories') {
            return <Image source={require('../assets/comment.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          } else {
            return <Image source={require('../assets/user.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          }
        },

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Root = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default Root;