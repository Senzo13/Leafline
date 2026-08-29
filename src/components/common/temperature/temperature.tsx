import LoadingComponent from '@components/common/loader/loader';
import { useUserProfile } from '@context/profile.context';
import { useSettings } from '@context/settings.context';
// @ts-ignore
import { TextVariantsType } from '@types/theme.types';
import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ThermostatProps {
  iconSize?: number;
  iconMarginTop?: number;
  textType?: keyof TextVariantsType;
}

const Thermostat: React.FC<ThermostatProps> = ({
  iconSize = 30,
  iconMarginTop = 5,
  textType = 'textMediumUpperMedium',
}) => {
  const { theme } = useSettings();
  const { weather } = useUserProfile();
  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      {weather == null ? (
        <LoadingComponent />
      ) : (
        <Text style={[theme.texts[textType], { color: theme.colors.text }]}>
          {weather.temp.toFixed(1)} °C
        </Text>
      )}
      <MaterialIcons
        name="device-thermostat"
        size={iconSize}
        color="#ff8600"
        style={{
          marginTop: iconMarginTop,
        }}
      />
    </View>
  );
};

export default Thermostat;
