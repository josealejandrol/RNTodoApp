import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    alignItems: 'center',
    backgroundColor: colors.BLUE,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
});

export default styles;
