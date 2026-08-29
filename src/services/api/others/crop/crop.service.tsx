import { ENDPOINTS } from '@resources/constants/endpoints';
import ApiService from '@services/api/core/api.service';
import { CredentialsService } from '@services/api/core/credentials.service';
import { jwtDecode } from 'jwt-decode';
// @ts-ignore
import { FieldData, PlotData } from '@types/field.types';
import axios from 'axios';

export class CropService {
  static getComparison = async () => {
    try {
      const token = await CredentialsService.getToken();
      const decodedToken: any = jwtDecode(token);
      const response = await ApiService.fetchData(
        `/crops/user/${decodedToken.id}/fields/diseases/comparison?limit=1&data=all`,
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
