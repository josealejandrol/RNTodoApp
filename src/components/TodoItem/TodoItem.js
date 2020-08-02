import React from 'react';
import {View, Pressable, Text, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import colors from '../../styles/colors';

let isNotDone = 'checkbox-blank-outline';
let isDone = 'checkbox-marked';
let remove = 'delete';

const TodoItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name={isNotDone} size={24} color={colors.BLACK} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Descripcion del todo</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon name={remove} size={24} color={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
