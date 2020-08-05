import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTodos} from '../../context/TodoContext';

import TodoItem from '../../components/TodoItem';

import styles from './styles';

const Completed = () => {
  const {todos} = useTodos();

  const filtered = todos.filter((item) => item.done === true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>Completes ({filtered.length})</Text>
        {todos &&
          filtered.map((item, index) => (
            <TodoItem
              key={item.id}
              id={item.id}
              desc={item.desc}
              done={item.done}
            />
          ))}
      </View>
    </SafeAreaView>
  );
};

export default Completed;
