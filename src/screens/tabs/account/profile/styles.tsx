import { StyleSheet } from 'react-native';
import { DarkTheme } from '@resources/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  avatarContainer: {
    height: 100,
    width: 100,
    top: 45,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 52,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    alignSelf: 'center',
  },
});

export default styles;
