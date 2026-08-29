import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { DarkTheme } from '@resources/constants/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    width: screenWidth,
    height: screenHeight * 0.57,
    zIndex: 900,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  separator: {
    width: 10,
  },
  container: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subMenu: {
    flexDirection: 'column',
    marginBottom: 28,
    marginTop: 0,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default styles;
