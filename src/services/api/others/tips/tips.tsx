import ApiService from '@services/api/core/api.service';

export class TipsService {
  static getTips = async () => {
    try {
      const response = await ApiService.fetchData('tips', true, true);
      if (response.code === 200) {
        return response.data;
      }
      return response;
    } catch (error) {
      console.error('Error getting tips', error);
    }
  };

  static getTip = async (id: string) => {
    try {
      const response = await ApiService.fetchData(`tips/${id}`, true, true);
      if (response.code === 200) {
        return response.data;
      }
      return response;
    } catch (error) {
      console.error('Error getting tip', error);
    }
  };
}
