import { StyleSheet } from 'react-native';
import { DarkTheme } from '../../../resources/constants/theme';

const styles = StyleSheet.create({
  input:{
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputPrimary: {
    borderColor: DarkTheme.colors.secondary,
  },
  inputSecondary: {
    borderColor: DarkTheme.colors.primary,
  },
});

export default styles;
