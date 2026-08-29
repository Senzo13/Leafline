import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

interface Profile {
  email: string;
  username: string;
  password: string;
}

export class CredentialsService {
  static async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem('authToken', token);
  }

  static async setLanguage(language: string): Promise<void> {
    await AsyncStorage.setItem('language', language);
  }

  static async getLanguage(): Promise<string | null> {
    const language = await AsyncStorage.getItem('language');
    return language;
  }

  static async setProfileImage(image: string): Promise<void> {
    await AsyncStorage.setItem('profileImageUri', image);
  }

  static async getProfileImage(): Promise<string | null> {
    const image = await AsyncStorage.getItem('profileImageUri');
    return image;
  }

  static async setTheme(theme: string): Promise<void> {
    await AsyncStorage.setItem('theme', theme);
  }

  static async getTheme(): Promise<string | null> {
    const theme = await AsyncStorage.getItem('theme');
    return theme;
  }

  static async getToken(): Promise<string | null> {
    const token = await AsyncStorage.getItem('authToken');
    return token;
  }

  static async setRefreshToken(refreshToken: string): Promise<void> {
    await AsyncStorage.setItem('refreshToken', refreshToken);
  }

  static async getRefreshToken(): Promise<string | null> {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    return refreshToken;
  }

  static async clearTokens(): Promise<void> {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('refreshToken');
  }

  static async setProfile(formData: Profile): Promise<void> {
    await AsyncStorage.setItem('email', formData.email);
    await AsyncStorage.setItem('username', formData.username);
    await AsyncStorage.setItem('password', formData.password);
  }

  static async getTutorialState(): Promise<boolean> {
    const tutorialSeen = await AsyncStorage.getItem('tutorialSeen');
    return tutorialSeen === 'true';
  }

  static async setTutorialDone(tutorialSeen: boolean) {
    await AsyncStorage.setItem('tutorialSeen', tutorialSeen.toString());
  }

  static async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem('authToken');
    try {
    // console.log('Token:', token);
    if (typeof token !== 'string') {
      console.log('No token found and token is not a string');
      return false;
    }

    if (!token) {
      console.log('No token found');
      return false;
    }


      // @ts-ignore
      const decodedToken: any = jwtDecode(token);
      // console.log('Decoded token:', decodedToken);
      if (decodedToken.exp) {
        const expirationDate = new Date(decodedToken.exp * 1000);
        // console.log('Token expiration date:', expirationDate);
        return expirationDate.getTime() >= Date.now();
      }
      // console.log('No expiration date found in token');
    return true;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  static async getProfile(): Promise<Profile | null> {
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    const username = await AsyncStorage.getItem('username');
    if (email && password && username) {
      return { email, username, password };
    }
    return null;
  }
}
