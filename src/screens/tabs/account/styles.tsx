import { StyleSheet } from 'react-native';
import { DarkTheme } from '../../../resources/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  header: {
    height: 140,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    position: 'absolute',
    top: 120,
    paddingBottom:5,
    paddingTop:2,
    paddingLeft:5,
    paddingRight:5,
    right: 10,
  },
  button: {
    width: 132,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    alignContent: 'center',
    alignSelf: 'center',
  },
  avatarContainer: {
    height: 100,
    width: 100,
    top: 85,
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
    marginBottom: 20,
  },
  name: {
    marginTop: 52,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    alignSelf: 'center',
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    padding: 0,
  },
  info: {
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default styles;
