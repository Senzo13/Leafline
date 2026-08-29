// @ts-nocheck
import { ENDPOINTS } from '@resources/constants/endpoints';
import ApiService from '@services/api/core/api.service';
import { SensorFieldData } from '@types/sensors.types';
export class SensorService {
  static getSensorVarietyData = async () => {
    try {
      const response = await ApiService.fetchData(
        'varieties/compare/1?data=all&limit=1',
        true,
        true,
      );
      if (response.code === 200) {
        return response;
      }
      return response;
    } catch (error) {
      console.error('Error getting sensor data', error);
    }
  };

  static getSensorData = async (sensorId: number) => {
    try {
      const response = await ApiService.fetchData(
        `sensors/${sensorId}?data=all&limit=1`,
        false,
        true,
      );
      if (response.code === 200) {
        return response;
      }
      return response;
    } catch (error) {
      console.error('Error getting sensor data', error);
    }
  };

  static getSensorDataByWeek = async (
    sensorId: number,
  ): Promise<SensorFieldData> => {
    try {
      const response = await ApiService.fetchData(
        `sensors/${sensorId}/byWeek`,
        true,
        true,
      );
      if (response.code === 200) {
        return response;
      }

      return response;
    } catch (error) {
      console.error('Error getting sensor data', error);
    }
  };
}
