import { StyleSheet } from 'react-native';
import { DarkTheme } from '@resources/constants/theme';
const styles = StyleSheet.create({
  buttonBase: {
    padding: 15,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonTextBase: {
    color: 'white',
    fontSize: 18,
  },
  buttonPrimary: {
    backgroundColor: DarkTheme.colors.secondary,
  },
  buttonSecondary: {
    backgroundColor: DarkTheme.colors.secondary,
  },
  buttonTertiary: {
    backgroundColor: DarkTheme.colors.tertiary,
  },
  buttonGoogle: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: DarkTheme.colors.google,
  },
  buttonTextGoogle: {
    fontSize: 16,
    marginLeft: 15,
    color: DarkTheme.colors.google,
  },
  buttonLink: {
    fontSize: 14,
    color: DarkTheme.colors.secondary,
    alignSelf: 'center',
  },
  buttonRounded: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkTheme.colors.primary,
    padding: 0,
    height: 70,
    width: 70,
    borderColor: DarkTheme.colors.secondary,
    borderWidth: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  buttonLanguage: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
    top: 25,
    padding: 8,
    backgroundColor: 'white',
  },
  buttonTextLanguage: {
    color: DarkTheme.colors.secondary,
    fontSize: 16,
  },
  buttonScan: {
    color: DarkTheme.colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  /////////////////////////////////////////////TEST I18NEXT BUTTON LANGUAGE STYLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
});

export default styles;
