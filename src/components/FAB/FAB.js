import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import colors from '../../styles/colors';

const FAB = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={'plus-thick'} size={24} color={colors.BLACK} />
    </TouchableOpacity>
  );
};

export default FAB;
