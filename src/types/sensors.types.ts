interface SensorMeasure {
  average: number;
  timestamp: number; // Timestamp en millisecondes depuis l'époque Unix
}

interface DaySensorData {
  airHumidities: SensorMeasure;
  luminosities: SensorMeasure;
  soilMoistures: SensorMeasure;
  temperatures: SensorMeasure;
}

interface WeekSensorData {
  Monday: DaySensorData;
  Tuesday: DaySensorData;
  Wednesday: DaySensorData;
  Thursday: DaySensorData;
  Friday: DaySensorData;
  Saturday: DaySensorData;
  Sunday: DaySensorData;
}

export interface SensorFieldData {
  data: WeekSensorData;
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  refreshDelay: number;
}
