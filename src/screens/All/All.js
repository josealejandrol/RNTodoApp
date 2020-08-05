import React, {useReducer, useContext} from 'react';
import {View, Text, FlatList, VirtualizedList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import todoReducer from '../../reducers/todoReducer';
import {useTodos} from '../../context/TodoContext';

import FAB from '../../components/FAB/FAB';
import TodoItem from '../../components/TodoItem/TodoItem';

import styles from './styles';

const All = ({navigation}) => {
  const {todos, setTodos} = useTodos();
  // const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>Todo App ({todos.length})</Text>
        {/* <FlatList
          data={todos}
          extraData={todos}
          renderItem={({item}) => (
            <TodoItem
              key={item.id}
              id={item.id}
              desc={item.desc}
              done={item.done}
            />
          )}
          keyExtractor={({id}) => id.toString()}
        /> */}
        {todos &&
          todos.map((item, index) => (
            <TodoItem
              key={item.id}
              id={item.id}
              desc={item.desc}
              done={item.done}
            />
          ))}
        <FAB navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default All;
