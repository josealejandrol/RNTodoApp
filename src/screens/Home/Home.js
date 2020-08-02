import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'OpenSans-Bold'}}>Soy HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
