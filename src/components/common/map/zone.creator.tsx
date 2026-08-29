import { useSettings } from '@context/settings.context';
import Mapbox from '@rnmapbox/maps';
import { calculateCentroid } from '@utils/plot.centroid';
import React, { useMemo } from 'react';
import { Text, View } from 'react-native';

interface ZoneCreatorProps {
  coordinates: { latitude: number; longitude: number }[];
  zoneType?: string;
  zoneColor: string;
  id: number;
  onZonePress?: () => void;
}

const ZoneCreator: React.FC<ZoneCreatorProps> = ({
  coordinates,
  zoneType,
  zoneColor,
  id,
  onZonePress,
}) => {
  const { theme } = useSettings();
  const fillColor = useMemo(() => zoneColor || '#000000', [zoneColor]);

  const polygonGeoJSON = useMemo(() => {
    if (coordinates.length < 3) return null;

    const coords = coordinates.map(coord => [coord.longitude, coord.latitude]);

    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [coords.concat([coords[0]])],
      },
    };
  }, [coordinates]);

  const lineGeoJSON = useMemo(() => {
    if (coordinates.length < 2) return null;

    const coords = coordinates.map(coord => [coord.longitude, coord.latitude]);
    coords.push(coords[0]);

    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coords,
      },
    };
  }, [coordinates]);

  const zoneCentroid = useMemo(() => {
    if (!polygonGeoJSON) return null;
    const formattedCoords = polygonGeoJSON.geometry.coordinates[0].map(
      coord => ({
        longitude: coord[0],
        latitude: coord[1],
      }),
    );
    return calculateCentroid({ coordinates: formattedCoords });
  }, [polygonGeoJSON]);

  return (
    <>
      {lineGeoJSON && (
        // @ts-ignore
        <Mapbox.ShapeSource id={`lineSource-${id}`} shape={lineGeoJSON}>
          <Mapbox.LineLayer
            id={`lineLayer-${id}`}
            style={{
              lineColor: theme.colors.secondary,
              lineWidth: 2,
              lineOpacity: 0.7,
            }}
          />
        </Mapbox.ShapeSource>
      )}
      {polygonGeoJSON && (
        <Mapbox.ShapeSource
          id={`polygonSource-${id}`}
          // @ts-ignore
          shape={polygonGeoJSON}
          onPress={onZonePress}>
          <Mapbox.FillLayer
            id={`polygonLayer-${id}`}
            style={{
              fillColor: fillColor,
              fillOpacity: 0.5,
            }}
            slot="bottom"
          />
        </Mapbox.ShapeSource>
      )}
      {zoneCentroid && zoneType && (
        <Mapbox.PointAnnotation
          key={`type-${id}`}
          id={`type-${id}`}
          coordinate={zoneCentroid}
          style={{ zIndex: 999 }}>
          <View
            style={{
              backgroundColor: theme.colors.primary,
              padding: 5,
              borderRadius: 10,
              zIndex: 999,
            }}>
            <Text
              style={{
                color: theme.colors.text,
                fontSize: 12,
                zIndex: 999,
              }}>
              {zoneType}
            </Text>
          </View>
        </Mapbox.PointAnnotation>
      )}
      {coordinates.map((coord, index) => (
        <Mapbox.PointAnnotation
          key={`point-${index}`}
          id={`point-${index}`}
          coordinate={[coord.longitude, coord.latitude]}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: theme.colors.tertiary,
              borderWidth: 2,
              borderColor: theme.colors.primary,
              borderRadius: 10,
            }}
          />
        </Mapbox.PointAnnotation>
      ))}
    </>
  );
};

export default ZoneCreator;
