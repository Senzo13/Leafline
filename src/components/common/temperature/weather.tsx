import { useUserProfile } from '@context/profile.context';
import { weatherConditions } from '@resources/constants/weather.conditions';
import React from 'react';
import { Image } from 'react-native';

interface WeatherProps {
  size?: number;
}

const Weather: React.FC<WeatherProps> = ({ size = 40 }) => {
  const { weather } = useUserProfile();
  const WeatherIcon =
    weatherConditions[weather.condition] || weatherConditions['Clear'];
  return <Image source={WeatherIcon} style={{ width: size, height: size }} />;
};

export default Weather;
