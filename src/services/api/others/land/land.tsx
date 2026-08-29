import { ENDPOINTS } from '@resources/constants/endpoints';
import ApiService from '@services/api/core/api.service';
// @ts-ignore
import { FieldData, PlotData } from '@types/field.types';
import axios from 'axios';
import { MAPBOX_ACCESS_TOKEN } from '@env';

export class LandService {
  static getLocation = async (query: string) => {
    const url = `${ENDPOINTS.MAP.GET_LOCATION}${query}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      const coordinates = data.features[0].center;
      return coordinates;
    } catch (error) {
      console.error('Error getting location', error);
      return null;
    }
  };

  static createField = async (data: FieldData) => {
    try {
      const response = await ApiService.postData(
        'fields/add',
        data,
        true,
        true,
      );
      if (response.code === 200) {
        return response;
      }
      return response;
    } catch (error) {
      console.error('Error creating field', error);
    }
  };

  static createPlot = async (data: PlotData) => {
    try {
      const response = await ApiService.postData(
        'plots/add',
        data,
        false,
        true,
      );
      if (response.code === 200) {
        return response;
      }
      return response;
    } catch (error) {
      console.error('Error creating plot', error);
    }
  };

  static getTypes = async () => {
    try {
      const response = await ApiService.fetchData(`/fieldTypes/tree`);
      if (response.code === 200) {
        return response;
      }
      return response;
    } catch (error) {
      console.error('Error getting sensor data', error);
    }
  };
}
