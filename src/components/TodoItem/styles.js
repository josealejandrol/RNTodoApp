import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    alignItems: 'center',
    // borderBottomColor: colors.GRAY,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  text: {
    // backgroundColor: 'red',
    fontFamily: 'OpenSans-SemiBoldItalic',
    // fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
