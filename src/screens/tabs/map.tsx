// @ts-nocheck
import Map from '@components/common/Map/map';
import ZoneCreator from '@components/common/Map/zone.creator';
import { Position } from '@rnmapbox/maps/lib/typescript/src/types/Position';
import React, { useState } from 'react';

const MapParent: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Position[]>([]);

  const handleMapPress = (e: any) => {
    const { geometry } = e;
    setCoordinates([...coordinates, geometry.coordinates]);
  };

  return (
    <Map
      styleUrl="mapbox://styles/mapbox/navigation-night-v1"
      onPress={handleMapPress}>
      <ZoneCreator coordinates={coordinates} />
    </Map>
  );
};

export default MapParent;
