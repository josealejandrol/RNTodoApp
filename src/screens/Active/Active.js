import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

const Active = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleText}>Actives</Text>
      </View>
    </SafeAreaView>
  );
};

export default Active;
