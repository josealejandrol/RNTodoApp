import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.YELLOW,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  titleText: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default styles;
