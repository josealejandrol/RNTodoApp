import React, {useReducer} from 'react';
import {View, Text, FlatList, VirtualizedList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import todoReducer from '../../reducers/todoReducer';

import FAB from '../../components/FAB/FAB';
import TodoItem from '../../components/TodoItem/TodoItem';

import styles from './styles';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React Native',
    done: false,
  },
  {
    id: 1,
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
        <Text style={styles.titleText}>All Section</Text>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItem
              key={item.id}
              id={item.id}
              desc={item.desc}
              done={item.done}
            />
          )}
          keyExtractor={({id}) => id.toString()}
        />
        <FAB />
      </View>
    </SafeAreaView>
  );
};

export default All;
