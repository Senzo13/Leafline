import { StyleSheet } from 'react-native';
import { DarkTheme } from '../../../resources/constants/theme';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.7,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  overlay: {
    flex: 1,
    paddingTop: 30,
  },
  logo: {
    position: 'absolute',
    width: 280,
    top: 10,
  },
  header: {
    fontSize: 28,
    color: DarkTheme.colors.secondary,
    fontWeight: 'bold',
    marginBottom: 35,
    alignSelf: 'center',
    marginTop: 200,
  },
  registerSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    justifyContent: 'center',
  },
  textPrimary: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    marginRight: 5,
  },
  textSecondary: {
    color: DarkTheme.colors.secondary,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;
