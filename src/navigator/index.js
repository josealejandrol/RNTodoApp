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
import EditTodo from '../screens/EditTodo';

//tab screens
import AllScreen from '../screens/All';
import ActiveScreen from '../screens/Active';
import CompletedScreen from '../screens/Completed';

const AllStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'All'}
        component={AllScreen}
        options={{
          title: 'All Section',
          headerStyle: {backgroundColor: colors.BLUE},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-ExtraBold',
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name={'EditTodo'}
        component={EditTodo}
        options={{
          title: 'Edit Todo',
          headerStyle: {backgroundColor: colors.BLUE},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-ExtraBold',
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ActiveStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Active'}
        component={ActiveScreen}
        options={{
          title: 'Active Section',
          headerStyle: {backgroundColor: colors.BLUE},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-ExtraBold',
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const CompletedStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Completed'}
        component={CompletedScreen}
        options={{
          title: 'Completed Section',
          headerStyle: {backgroundColor: colors.BLUE},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'OpenSans-ExtraBold',
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
};

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
          <Tab.Screen name={'All'} component={AllStackScreen} />
          <Tab.Screen name={'Active'} component={ActiveStackScreen} />
          <Tab.Screen name={'Completed'} component={CompletedStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
