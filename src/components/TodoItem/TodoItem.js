import React from 'react';
import {View, Pressable, Text, TouchableOpacity} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import colors from '../../styles/colors';

let notDone = 'checkbox-blank-outline';
let ciDone = 'checkbox-marked';
let remove = 'delete';

const TodoItem = ({id, desc, done}) => {
  let isDone = done ? ciDone : notDone;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name={isDone} size={24} color={colors.BLACK} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{desc}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon name={remove} size={24} color={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
