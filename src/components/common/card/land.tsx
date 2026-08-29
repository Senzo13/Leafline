import { useSettings } from '@context/settings.context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WeatherAnimator from '../lottie/animation';
import Thermostat from '../temperature/temperature';

interface LandCardProps {
  navigation: any;
  name: string;
  id: number;
}

const LandCard: React.FC<LandCardProps> = ({ navigation, name, id }) => {
  const { theme } = useSettings();
  const { t } = useTranslation();
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const onLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Fields', { name, id })}
      style={{ width: '31.5%', marginBottom: 10 }}>
      <ImageBackground
        style={styles.container}
        borderRadius={10}
        onLayout={onLayout}
        source={require('assets/images/backgrounds/background-field.png')}>
        <View style={styles.containerOpacity} />
        <View style={styles.containerWeather}>
          <WeatherAnimator
            width={containerSize.width}
            height={containerSize.height}
          />
        </View>
        <View style={styles.containerThermostat}>
          <Thermostat
            iconSize={20}
            iconMarginTop={2}
            textType="textSmallUpper"
          />
        </View>
        <Text
          style={{ ...theme.texts.textSmallUpper, color: theme.colors.text }}>
          {name.toUpperCase()}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  containerOpacity: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: 'black',
  },
  containerWeather: {
    position: 'absolute',
    top: 20,
    left: 0,
  },
  containerThermostat: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
});

export default LandCard;
