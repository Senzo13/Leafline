import { AuthService } from '@services/api/others/auth/auth';
import { OpenWeatherService } from '@services/api/others/openWeather/open.weather.service';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserProfile = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  city: string;
  country: string;
  phone: string;
  fields: object;
};

type WeatherData = {
  temp: number;
  condition: string;
};

interface UserProfileContextType {
  profile: UserProfile;
  weather: WeatherData;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  refreshProfile: () => void;
}

const defaultProfile: UserProfile = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  city: '',
  country: '',
  phone: '',
  fields: {},
};

const weatherData = {
  temp: 0,
  condition: '',
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined,
);

interface UserProfileProviderProps {
  children: ReactNode;
}

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [weather, setWeather] = useState<WeatherData>(weatherData);

  useEffect(() => {
    refreshProfile();
    getWeather();
    const weatherInterval = setInterval(() => {
      getWeather();
    }, 30000);

    return () => {
      clearInterval(weatherInterval);
    };
  }, [profile.city]);

  const getWeather = async () => {
    if (profile.city === '') {
      const temp = await OpenWeatherService.getTemperature('Marseille');
      const condition = await OpenWeatherService.weatherCondition('Marseille');
      setWeather({ temp, condition });
    } else {
      const temp = await OpenWeatherService.getTemperature(profile.city);
      const condition = await OpenWeatherService.weatherCondition(profile.city);
      setWeather({ temp, condition });
    }
  };

  const refreshProfile = useCallback(async () => {
    const profile = await AuthService.getProfile();
    if (profile.code !== 200) return console.log('Error fetching profile');

    const apiResponse: UserProfile = {
      firstName: profile.data.firstName,
      lastName: profile.data.lastName,
      username: profile.data.username,
      email: profile.data.email,
      city: profile.data.city,
      country: profile.data.country,
      phone: profile.data.phone,
      fields: profile.data.fields,
    };
    setProfile(apiResponse);
  }, []);

  return (
    <UserProfileContext.Provider
      value={{ profile, weather, setProfile, refreshProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = (): UserProfileContextType => {
  const context = useContext(UserProfileContext);

  if (!context) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }

  return context;
};
