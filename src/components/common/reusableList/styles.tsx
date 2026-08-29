import { StyleSheet } from 'react-native';
import { DarkTheme } from '@resources/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    marginTop: 20,
    marginBottom: 80,
  },
  email: {
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
    height: 20,
  },
  separator: {
    height: 2,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  lastItemContainer: {
    height: 0,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default styles;
