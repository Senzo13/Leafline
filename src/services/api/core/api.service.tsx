// @ts-nocheck
import axios from 'axios';
import { LeaflineService } from '@services/api/core/leafline.service';
import { CredentialsService } from '@services/api/core/credentials.service';

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

class ApiService {
  private static loadingContext: LoadingContextType | undefined;

  static initLoadingContext(context: LoadingContextType) {
    ApiService.loadingContext = context;
  }

  private static async createHeadersAsync(requireAuth: boolean) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (requireAuth) {
      const token = await CredentialsService.getToken();
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  static fetchData = async (
    url: string,
    activeLoader = true,
    requireAuth = true,
  ) => {
    if (!ApiService.loadingContext) {
      throw new Error('Loading context not initialized');
    }
    const { setIsLoading } = ApiService.loadingContext;

    if (activeLoader) {
      setIsLoading(true);
    }

    try {
      const headers = await ApiService.createHeadersAsync(requireAuth);
      const response = await axios.get(
        `${LeaflineService.API_ENDPOINT}/${url}`,
        {
          headers,
        },
      );

      if (activeLoader) {
        setIsLoading(false);
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      if (activeLoader) {
        setIsLoading(false);
      }
    }
  };

  static postData = async (
    url: string,
    data: any,
    activeLoader = true,
    requireAuth = true,
  ) => {
    if (!ApiService.loadingContext) {
      throw new Error('Loading context not initialized');
    }
    const { setIsLoading } = ApiService.loadingContext;

    if (activeLoader) {
      setIsLoading(true);
    }

    try {
      const headers = await ApiService.createHeadersAsync(requireAuth);
      const response = await axios.post(
        `${LeaflineService.API_ENDPOINT}/${url}`,
        data,
        {
          headers,
        },
      );

      if (activeLoader) {
        setIsLoading(false);
      }
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      return error.response.data;
    } finally {
      if (activeLoader) {
        setIsLoading(false);
      }
    }
  };

  static putData = async (
    url: string,
    data: any,
    activeLoader = true,
    requireAuth = true,
  ) => {
    if (!ApiService.loadingContext) {
      throw new Error('Loading context not initialized');
    }
    const { setIsLoading } = ApiService.loadingContext;

    if (activeLoader) {
      setIsLoading(true);
    }

    try {
      const headers = await ApiService.createHeadersAsync(requireAuth);
      const response = await axios.put(
        `${LeaflineService.API_ENDPOINT}/${url}`,
        data,
        {
          headers,
        },
      );

      if (activeLoader) {
        setIsLoading(false);
      }

      return response.data;
    } catch (error) {
      console.error('Error putting data:', error);
    } finally {
      if (activeLoader) {
        setIsLoading(false);
      }
    }
  };

  static deleteData = async (url: string, requireAuth = false) => {
    if (!ApiService.loadingContext) {
      throw new Error('Loading context not initialized');
    }
    const { setIsLoading } = ApiService.loadingContext;
    setIsLoading(true);
    try {
      const headers = await ApiService.createHeadersAsync(requireAuth);
      const response = await axios.delete(
        `${LeaflineService.API_ENDPOINT}/${url}`,
        {
          headers,
        },
      );

      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setIsLoading(false);
    }
  };
}

export default ApiService;
