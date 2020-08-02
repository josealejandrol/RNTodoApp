import React, {useReducer} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import todoReducer from '../../reducers/todoReducer';

import TodoItem from '../../components/TodoItem/TodoItem';

import styles from './styles';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React Native',
    done: false,
  },
  {
    id: new Date().getTime(),
    desc: 'Aprender FlexBox',
    done: false,
  },
];

const All = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>All Section</Text>
        <TodoItem />
      </View>
    </SafeAreaView>
  );
};

export default All;
