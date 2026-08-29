import Mapbox from '@rnmapbox/maps';
import { Position } from '@rnmapbox/maps/lib/typescript/src/types/Position';
import { MAPBOX_ACCESS_TOKEN } from '@env';
import useUserLocation from '@services/hooks/useUserLocation';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface MapProps {
  styleUrl: string;
  children: React.ReactNode;
  onPress?: (e: any) => void;
  searchCoordinates?: [number, number];
}

const Map: React.FC<MapProps> = ({
  styleUrl,
  children,
  onPress,
  searchCoordinates,
}) => {
  const { latitude, longitude } = useUserLocation();
  const [cameraCoordinates, setCameraCoordinates] = useState<Position>([
    longitude,
    latitude,
  ]);

  useEffect(() => {
    if (searchCoordinates) {
      setCameraCoordinates(searchCoordinates);
    } else {
      setCameraCoordinates([longitude, latitude]);
    }
  }, [searchCoordinates, latitude, longitude]);

  Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

  return (
    <SafeAreaView style={styles.container}>
      <Mapbox.MapView
        styleURL={styleUrl}
        style={styles.map}
        onPress={onPress}
        compassEnabled={false}
        scaleBarEnabled={false}
        logoEnabled={false}>
        <Mapbox.Camera
          zoomLevel={11}
          centerCoordinate={cameraCoordinates}
          animationMode="flyTo"
          animationDuration={3000}
        />
        {children}
      </Mapbox.MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;
