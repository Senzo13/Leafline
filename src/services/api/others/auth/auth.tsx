// @ts-nocheck
import ApiService from '@services/api/core/api.service';
import { CredentialsService } from '@services/api/core/credentials.service';
import { jwtDecode } from 'jwt-decode';
export class AuthService {
  static login = async (data: any) => {
    const response = await ApiService.postData('auth/login', data, true, false);
    if (response.code === 200) {
      CredentialsService.setToken(response.accessToken);
      CredentialsService.setProfile(data);
    }
    return response;
  };

  static register = async (data: any) => {
    const response = await ApiService.postData(
      'auth/register',
      data,
      true,
      false,
    );
    return response;
  };

  static getProfile = async () => {
    const token = await CredentialsService.getToken();
    const decodedToken: any = jwtDecode(token);
    const profile = await ApiService.fetchData(
      `users/${decodedToken.id}`,
      false,
      true,
    );
    return profile;
  };

  static updateProfile = async (data: any) => {
    const token = await CredentialsService.getToken();
    const decodedToken: any = jwtDecode(token);
    const response = await ApiService.putData(
      `users/update/${decodedToken.id}`,
      data,
      true,
      true,
    );
    console.log(response);
    return response;
  };

  static updateProfileField = async (data: any) => {
    const token = await CredentialsService.getToken();
    const decodedToken: any = jwtDecode(token);
    data.userID = decodedToken.id;

    const response = await ApiService.postData(`crops/add`, data, true, true);
    console.log(response);
    return response;
  };
}
