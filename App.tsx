import React from 'react';
import {View, Text, Settings} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './navigation/Home';
import AppSet from './navigation/AppSet';
import Progress from './navigation/Progress';
import Test from './navigation/Progress copy';

const Tab = createBottomTabNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
        />
        
        <Tab.Screen name="Progress" component={Progress}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="progress-check" size={size} color={color}/>
              ),
            }}
        />

        <Tab.Screen name="Test" component={Test}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="ab-testing" size={size} color={color}/>
              ),
            }}
        />

        <Tab.Screen name="Settings" component={AppSet}
            options={{
              tabBarIcon: ({color, size}) =>(
                <Feather name="settings" size={size} color={color}/>
              )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;
