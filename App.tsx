import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './navigation/Home';
import AppSet from './navigation/AppSet';
import Progress from './navigation/Progress';
import Test from './navigation/Test';
import AlphabetScreen from './navigation/AlphabetScreen';
import AlphabetDetailScreen from './navigation/AlphabetDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AlphabetScreen" component={AlphabetScreen} />
    <Stack.Screen name="AlphabetDetailScreen" component={AlphabetDetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Progress" 
          component={Progress}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="progress-check" size={size} color={color}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Test" 
          component={Test}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ab-testing" size={size} color={color}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={AppSet}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" size={size} color={color}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
