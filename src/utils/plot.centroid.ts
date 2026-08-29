import { FieldData } from '../types/field.types';

interface CalCulateCentroid {
  coordinates: { latitude: number; longitude: number }[];
}

export const calculateCentroid = ({
  coordinates,
}: CalCulateCentroid): [number, number] => {
  let sumLatitude = 0;
  let sumLongitude = 0;

  coordinates.forEach(coord => {
    sumLatitude += coord.latitude;
    sumLongitude += coord.longitude;
  });

  const averageLatitude = sumLatitude / coordinates.length;
  const averageLongitude = sumLongitude / coordinates.length;

  return [averageLongitude, averageLatitude];
};

const getCoordinatesFromField = (field: FieldData) => {
  const allCoordinates = [];
  field.plots.forEach(plot => {
    allCoordinates.push(...plot.geolocation);
  });
  return allCoordinates;
};

export const calculateFieldCentroid = (field: FieldData): [number, number] => {
  const coordinates = getCoordinatesFromField(field);
  return calculateCentroid({ coordinates });
};
