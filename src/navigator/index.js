import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//screens
import HomeScreen from '../screens/Home';

//tab screens
import AllScreen from '../screens/All';
import ActiveScreen from '../screens/Active';
import CompletedScreen from '../screens/Completed';

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'All') {
                iconName = focused
                  ? 'clipboard-text-multiple'
                  : 'clipboard-text-multiple-outline';
              } else if (route.name === 'Active') {
                iconName = focused ? 'alert-circle' : 'alert-circle-outline';
              } else if (route.name === 'Completed') {
                iconName = focused ? 'check-circle' : 'check-circle-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.BLUE,
            inactiveTintColor: colors.GRAY,
          }}>
          <Tab.Screen name={'All'} component={AllScreen} />
          <Tab.Screen name={'Active'} component={ActiveScreen} />
          <Tab.Screen name={'Completed'} component={CompletedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
