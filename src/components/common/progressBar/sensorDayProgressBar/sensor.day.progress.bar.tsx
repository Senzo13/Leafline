// @ts-nocheck
import SensorProgressBar from '@components/common/progressBar/sensorProgressBar/sensor.progress.bar';
import { useSettings } from '@context/settings.context';
import { DaySensorData, SensorFieldData } from '@types/sensors.types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function useWeekDaySensorData(weekData: SensorFieldData) {
  const { t } = useTranslation();
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const localizedDays = [
    t('home.field.timestamp_monday'),
    t('home.field.timestamp_tuesday'),
    t('home.field.timestamp_wednesday'),
    t('home.field.timestamp_thursday'),
    t('home.field.timestamp_friday'),
    t('home.field.timestamp_saturday'),
    t('home.field.timestamp_sunday'),
  ];

  if (!weekData) return [];
  return days.map(day => ({
    day: localizedDays[days.indexOf(day)],
    data: weekData.data[day],
  }));
}

const DaySensorDisplay: React.FC<{ day: string; data: DaySensorData }> = ({
  day,
  data,
}) => {
  const { theme } = useSettings();
  return (
    <View style={styles.dayContainer}>
      <Text
        style={[
          theme.texts.textUpper,
          { color: theme.colors.text, marginRight: 20, elevation: 3 },
        ]}>
        {day}
      </Text>
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <SensorProgressBar
          iconName="water-drop"
          percentage={data.soilMoistures.average.toFixed(0)}
          color="#0047FF"
          width={35}
          height={180}
        />
        <View style={styles.separator} />
        <SensorProgressBar
          iconName="device-thermostat"
          percentage={data.temperatures.average.toFixed(0)}
          color="#F44336"
          width={35}
          height={180}
        />
        <View style={styles.separator} />
        <SensorProgressBar
          iconName="tungsten"
          percentage={data.luminosities.average.toFixed(0)}
          color="#E66D01"
          width={35}
          height={180}
        />
        <View style={styles.separator} />
        <SensorProgressBar
          iconName="air"
          percentage={data.airHumidities.average.toFixed(0)}
          color="#6FBEFF"
          width={35}
          height={180}
        />
      </View>
    </View>
  );
};

const WeekSensorDataScrollView: React.FC<{
  sensorDataArray: SensorFieldData;
}> = ({ sensorDataArray }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useSettings();
  const sortedWeekData = useWeekDaySensorData(sensorDataArray);

  useEffect(() => {
    if (sortedWeekData.length > 0) {
      setIsLoading(false);
    }
  }, [sortedWeekData]);

  return isLoading ? (
    <View style={{ paddingVertical: 20 }}>
      <ActivityIndicator size="large" color={theme.colors.secondary} />
    </View>
  ) : (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContainer}>
      {sortedWeekData.map((item, index) => (
        <View key={index}>
          <DaySensorDisplay day={item.day} data={item.data} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 10,
  },
  dayContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  separator: {
    width: 6,
  },
});

export default WeekSensorDataScrollView;
