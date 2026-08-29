import React from 'react';
import { View, Text } from 'react-native';
import { useSettings } from '@context/settings.context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

interface Disease {
  name: string;
  description: string;
  symptom: string;
  treatment: string;
  image: string;
  soilMoisture: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  airHumidity: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  luminosity: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  temperature: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  organism: {
    name: string;
    description: string;
    image: string;
    probableDiseases: string;
  };
}

interface ClimaticMetricsProps {
  type: string;
  diseases: Disease[];
}

const ClimaticMetrics: React.FC<ClimaticMetricsProps> = ({
  type,
  diseases,
}) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  const lastValue =
    diseases[0][type].data[diseases[0][type].data.length - 1].value;
  const minValue = diseases[0][type].min;
  const maxValue = diseases[0][type].max;
  const latestData = diseases[0][type].data[diseases[0][type].data.length - 1];
  const riskLevel =
    latestData.dangerous === 'high'
      ? t('climaticMetrics.high')
      : latestData.dangerous === 'moderate'
        ? t('climaticMetrics.moderate')
        : t('climaticMetrics.low');
  let iconName = 'done'; // Default icon
  if (lastValue < minValue) {
    iconName = 'arrow-downward';
  } else if (lastValue > maxValue) {
    iconName = 'arrow-upward';
  }

  return (
    <View
      style={{
        height: '50%',
        width: '50%',
        backgroundColor:
          type === 'temperature'
            ? theme.colors.tertiary50
            : type === 'luminosity'
              ? theme.colors.secondary50
              : type === 'airHumidity'
                ? theme.colors.primary50
                : theme.colors.text50,
      }}>
      <Text
        style={{
          textAlign: 'center',
          textAlignVertical: 'center',
          ...theme.texts.textSmallUpper,
          color: theme.colors.secondary,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        {t(`climaticMetrics.${type}`).toUpperCase()}
      </Text>
      <Text
        style={{
          color: theme.colors.gray,
          textAlign: 'center',
          textAlignVertical: 'center',
          ...theme.texts.textSmall,
        }}>
        {t('climaticMetrics.threshold', {
          min: minValue,
          max: maxValue,
          unit: type === 'temperature' ? '°C' : '%',
        })}
      </Text>
      <MaterialIcons
        name={iconName}
        color="white"
        size={30}
        style={{ alignSelf: 'center' }}
      />
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          ...theme.texts.textSmall,
        }}>
        {t('climaticMetrics.lastMeasurement', {
          value: lastValue.toFixed(1),
          unit: type === 'temperature' ? '°C' : '%',
        })}
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          ...theme.texts.textSmall,
        }}>
        {t('climaticMetrics.riskLevel', { risk: riskLevel })}
      </Text>
    </View>
  );
};

export default ClimaticMetrics;
