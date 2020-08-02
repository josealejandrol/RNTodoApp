import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>Soy HomeScreen</Text>
        <Icon name={'emoticon'} size={28} color={'#000'} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
