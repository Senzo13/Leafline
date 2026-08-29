// @ts-nocheck
import Accordion from '@components/common/accordion/accordion';
import BackButton from '@components/common/button/back.button';
import ButtonAccordion from '@components/common/button/buttonCsx';
import ExpandableText from '@components/common/expandable/expandable';
import LoadingComponent from '@components/common/loader/loader';
import WeatherAnimator from '@components/common/lottie/animation';
import WeekSensorDataScrollView from '@components/common/progressBar/sensorDayProgressBar/sensor.day.progress.bar';
import SensorProgressBar from '@components/common/progressBar/sensorProgressBar/sensor.progress.bar';
import Thermostat from '@components/common/temperature/temperature';
import { useUserProfile } from '@context/profile.context';
import { useSettings } from '@context/settings.context';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SensorService } from '@services/api/others/sensor/sensor.service';
import { RootStackParamList } from '@types/routes.types';
import { SensorFieldData } from '@types/sensors.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
interface FieldProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Field'>;
  route: any; // Adding route here
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Field: React.FC<FieldProps> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useSettings();
  const { profile, weather } = useUserProfile();
  const [errorCode, setErrorCode] = useState(400);
  const opacityHigh = 1;
  const opacityLow = 0;
  const [sensorData, setSensorData] = useState(null);
  const [sensorDataState, setSensorDataState] = useState(null);
  const [sensorDataByWeek, setSensorDataByWeek] =
    useState<SensorFieldData>(null);

  const { name, id } = route.params; // Retrieve the name from route params

  const [plotGeolocation, setPlotGeolocation] = useState(
    profile.fields.find(field => field.id === id),
  );

  function isStateCritical(sensorData) {
    const { luminosities, airHumidities, soilMoistures, temperatures } =
      sensorData;
    const values = [
      ...luminosities.map(item => item.value),
      ...airHumidities.map(item => item.value),
      ...soilMoistures.map(item => item.value),
      ...temperatures.map(item => item.value),
    ];
    const average = values.reduce((acc, curr) => acc + curr, 0) / values.length;
    return average < 50;
  }

  const getData = async () => {
    const response = await SensorService.getSensorData(8);
    if (response) {
      setErrorCode(response.code);
    }
    if (response.code !== 200) {
      return;
    }
    setSensorData(response.data);
  };

  const getDataByWeek = async () => {
    const response = await SensorService.getSensorDataByWeek(1);
    if (response.code !== 200) {
      return;
    }
    setSensorDataByWeek(response);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
      getDataByWeek();
    }, []),
  );

  useEffect(() => {
    if (!sensorData) return;
    setSensorDataState(isStateCritical(sensorData));
  }, [sensorData]);

  const colorStart = `rgba(${parseInt(theme.colors.primary.slice(1, 3), 16)}, 
                           ${parseInt(theme.colors.primary.slice(3, 5), 16)}, 
                           ${parseInt(theme.colors.primary.slice(5, 7), 16)}, 
                           ${opacityHigh})`;

  const colorEnd = `rgba(${parseInt(theme.colors.primary.slice(1, 3), 16)}, 
                         ${parseInt(theme.colors.primary.slice(3, 5), 16)}, 
                         ${parseInt(theme.colors.primary.slice(5, 7), 16)}, 
                         ${opacityLow})`;

  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      getData();
    }, 5000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          backgroundColor: theme.colors.primary,
        }}>
        {/* BACKGROUND IMAGE AND WEATHER ANIMATOR */}
        <View
          style={{
            height: screenHeight * 0.55,
            overflow: 'hidden',
            borderBottomRightRadius: 45,
            borderBottomLeftRadius: 45,
            backgroundColor: theme.colors.primary,
            borderWidth: 1,
            position: 'absolute',
            top: 0,
            zIndex: 0,
            borderColor: 'transparent',
          }}>
          <ImageBackground
            source={require('assets/images/backgrounds/background-field-cropped.png')}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <LinearGradient
              colors={[colorStart, colorStart, colorEnd]}
              locations={[0, 0.1, 1]}
              style={styles.linearGradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
            <View style={{ position: 'absolute', top: 10, left: 0, zIndex: 1 }}>
              <WeatherAnimator />
            </View>
          </ImageBackground>
        </View>

        {/* HEAD FIELD CONTENT */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 30,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <BackButton />
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            {weather == null ? (
              <LoadingComponent />
            ) : (
              <Thermostat iconMarginTop={0} />
            )}
          </View>
        </View>
        <View
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              ...theme.texts.textMediumUpper,
              color: theme.colors.gray,
              fontSize: 14,
            }}>
            {t('home.field.titre')}
          </Text>
          <Text
            style={{
              ...theme.texts.title,
              color: theme.colors.text,
            }}>
            {name.toUpperCase()}
          </Text>
        </View>

        {/* BODY FIELD CONTENT */}
        <ScrollView>
          <View style={{ marginBottom: 100 }}>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <TouchableOpacity
                style={{ marginTop: 20, marginBottom: 0 }}
                onPress={() =>
                  navigation.navigate('FieldVisualisation', {
                    field: plotGeolocation,
                  })
                }>
                <ButtonAccordion
                  title={t('home.field.map_title')}
                  subtitle={t('home.field.map_subtitle')}
                />
              </TouchableOpacity>
              <View style={{ marginTop: 20 }}>
                <Accordion
                  title={t('home.field.alert_title')}
                  subtitle={t('home.field.alert_subtitle')}
                  expand={true}>
                  <ExpandableText
                    title={t('home.field.sensor_title')}
                    icon="error-outline"
                    iconSuccess="thumb-up"
                    errorCode={sensorDataState ? 500 : 200}
                    description={
                      sensorDataState
                        ? t('home.field.alert_description_danger')
                        : t('home.field.alert_description_success')
                    }
                  />
                </Accordion>
              </View>
            </View>

            <View
              style={{
                ...styles.container,
              }}>
              <Accordion
                title={t('home.field.sensor_title')}
                subtitle={t('home.field.sensor_subtitle')}
                expand={true}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={styles.scrollContainer}>
                  <SensorProgressBar
                    iconName="water-drop"
                    percentage={
                      sensorData
                        ? sensorData.soilMoistures[0]?.value.toFixed(0)
                        : 20
                    }
                    color="#0047FF"
                  />
                  <View style={styles.separator} />
                  <SensorProgressBar
                    iconName="device-thermostat"
                    percentage={
                      sensorData
                        ? sensorData.temperatures[0]?.value.toFixed(0)
                        : 20
                    }
                    color="#F44336"
                  />
                  <View style={styles.separator} />
                  <SensorProgressBar
                    iconName="tungsten"
                    percentage={
                      sensorData
                        ? sensorData.luminosities[0]?.value.toFixed(0)
                        : 20
                    }
                    color="#E66D01"
                  />
                  <View style={styles.separator} />
                  <SensorProgressBar
                    iconName="air"
                    subIconName="air"
                    color="#6FBEFF"
                    subColor={theme.colors.tertiary}
                    percentage={
                      sensorData
                        ? sensorData.airHumidities[0]?.value.toFixed(0)
                        : 20
                    }
                  />
                </ScrollView>
              </Accordion>
            </View>

            <View
              style={{
                ...styles.container,
              }}>
              <Accordion
                title={t('home.field.sensor_title_history')}
                subtitle={t('home.field.sensor_subtitle_history')}
                expand={false}>
                <WeekSensorDataScrollView sensorDataArray={sensorDataByWeek} />
              </Accordion>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Field;
