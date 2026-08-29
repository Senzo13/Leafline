import Geolocation from '@react-native-community/geolocation';
import { useFocusEffect } from '@react-navigation/native';
import { Position } from '@rnmapbox/maps/lib/typescript/src/types/Position';
import requestLocationPermission from '@utils/request.permission.utils';
import { useCallback, useState } from 'react';

interface UserLocation {
  longitude: number;
  latitude: number;
}

const useUserLocation = (): UserLocation => {
  const [location, setLocation] = useState<Position | null>(null);

  useFocusEffect(
    useCallback(() => {
      const getLocation = async () => {
        const hasPermission = await requestLocationPermission();

        if (hasPermission) {
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setLocation([longitude, latitude]);
            },
            error => {
              console.log(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        }

        if (!hasPermission) {
          await requestLocationPermission();
        }
      };

      getLocation();
    }, []),
  );

  return { longitude: location?.[0] || 0, latitude: location?.[1] || 0 };
};

export default useUserLocation;
