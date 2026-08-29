import { Platform } from 'react-native';
import {
  PERMISSIONS,
  Permission,
  PermissionStatus,
  RESULTS,
  check,
  request,
} from 'react-native-permissions';

const requestLocationPermission = async (): Promise<boolean> => {
  let permission: Permission | undefined;

  if (Platform.OS === 'android') {
    permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  } else if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  }

  if (!permission) {
    console.log('Plateforme non prise en charge');
    return false;
  }

  const status: PermissionStatus = await check(permission);
  if (status === RESULTS.GRANTED) {
    console.log('Permission de localisation déjà accordée');
    return true;
  }

  const result = await request(permission);
  if (result === RESULTS.GRANTED) {
    console.log('Permission de localisation accordée');
    return true;
  } else {
    if (result === RESULTS.DENIED) {
      console.log('Permission de localisation refusée');
      await request(permission);
    } else if (result === RESULTS.BLOCKED) {
      console.log(
        'Permission de localisation bloquée. Veuillez l’activer dans les réglages.',
      );
    }
    return false;
  }
};

export default requestLocationPermission;
