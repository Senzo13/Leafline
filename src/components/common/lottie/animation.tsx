import { useUserProfile } from '@context/profile.context';
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import RainDrops from './rainDrops';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface WeatherAnimatorProps {
  width?: number;
  height?: number;
}

const WeatherAnimator: React.FC<WeatherAnimatorProps> = ({ width, height }) => {
  const { weather } = useUserProfile();
  const [error, setError] = React.useState<string | null>(null);
  const [animationSource, setAnimationSource] = React.useState<any>(null);
  const [isRain, setIsRain] = React.useState<boolean>(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          if (weather.condition === 'Rain') {
            setIsRain(true);
          } else {
            setIsRain(false);
          }
          setError(null);
        } catch (error) {
          console.log('Error fetching weather data:', error);
          setError('Error fetching weather data');
        }
      };
      fetchData();
    }, [weather.condition]),
  );

  React.useEffect(() => {
    switch (weather.condition) {
      case 'Clouds':
        setAnimationSource(require('assets/animations/clouds.json'));
        break;
      case 'Rain':
        // Rain is the cloudy weather layer plus the native raindrops overlay.
        setAnimationSource(require('assets/animations/clouds.json'));
        break;
      case 'Snow':
        setAnimationSource(require('assets/animations/snow.json'));
        break;
      default:
        setAnimationSource(null);
        break;
    }
  }, [weather.condition]);

  return (
    <View>
      {error ? (
        <Text>Error: {error}</Text>
      ) : animationSource ? (
        <>
          <LottieView
            source={animationSource}
            autoPlay
            loop
            style={{
              width: width ? width : screenWidth,
              height: height ? height : screenHeight,
              position: 'absolute',
              top: height ? -height / 2.5 : -screenHeight / 2.5,
              opacity:
                weather.condition === 'Clouds' || weather.condition === 'Rain'
                  ? 0.5
                  : 1,
            }}
          />
        </>
      ) : null}
      {isRain ? <RainDrops /> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherAnimator;
