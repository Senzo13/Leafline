import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useSettings } from '@context/settings.context';
import HealthAlert from '@components/common/svg/svg-alert';
import HealthGood from '@components/common/svg/svg-good';
import { Logo } from '@components/common/logo/logo';
import Button from '@components/common/button/button';
import { data } from '@utils/data';
import { datas } from '@utils/datas';
import VerticalProgressSteps from '@components/common/scan/stepper';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

const HealthScan: React.FC = () => {
  const { theme } = useSettings();
  const { t } = useTranslation();
  const [currentData, setCurrentData] = useState(data);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [showDetails, setShowDetails] = useState(false);
  const [isHealthGood, setIsHealthGood] = useState(true);
  const [title, setTitle] = useState(t('scan.initialTitle'));

  const scaleValue = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleScanPress = () => {
    setCurrentData(prevData => (prevData === data ? datas : data));
    setLastUpdate("À l'instant");
    setIsHealthGood(false);
    setTitle(t('scan.title'));
    slideAnim.setValue(300);
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1, backgroundColor: theme.colors.primary }}>
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
      }}
      style={{
        flex: 1,
      }}>
      <View style={styles.scanContainer}>
        {isHealthGood ? <HealthGood /> : <HealthAlert />}
      </View>
      <Text
        style={{
          ...theme.texts.title,
          color: theme.colors.text,
          ...styles.title,
          fontSize: 26,
          lineHeight: 34,
          minHeight: 112,
          width: '85%',
        }}>
        {title}
      </Text>
      <Logo
        src={require('assets/images/logo/healthScan_logo.png')}
        style={styles.image}
      />
      <Animated.View
        style={[
          styles.scanButtonAnchor,
          { transform: [{ translateY: -32 }, { scale: scaleValue }] },
        ]}>
        <Button
          title={t('scan.scanButton')}
          type="scan"
          onPress={handleScanPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        />
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          width: '100%',
          alignItems: 'center',
          flexGrow: 0,
          marginTop: 70,
        }}>
        <View style={styles.recap}>
          <Text
            style={{
              ...theme.texts.subTitle,
              color: theme.colors.text,
            }}>
            {t('scan.fieldsCount', { count: currentData.data.fields.length })}
          </Text>
          <FlatList
            data={currentData.data.fields}
            renderItem={({ item }) => (
              <Text
                style={{
                  ...theme.texts.textMedium,
                  color: theme.colors.text,
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                {t('scan.fieldCondition', {
                  name: item.name,
                  test: isHealthGood ? 'bonnes' : 'mauvaises',
                })}
              </Text>
            )}
            keyExtractor={item => item.id.toString()}
          />

          <TouchableOpacity
            onPress={() => setShowDetails(!showDetails)}
            style={{
              ...theme.texts.textSmall,
              marginTop: 20,
            }}>
            <Text style={{ color: theme.colors.gray }}>
              {showDetails ? t('scan.hideDetails') : t('scan.showDetails')}
            </Text>
          </TouchableOpacity>
        </View>
        {showDetails && (
          <VerticalProgressSteps theme={theme} fieldData={currentData} />
        )}
      </Animated.View>
      {lastUpdate ? (
        <Text
          style={{
            ...theme.texts.textSmall,
            color: theme.colors.gray,
            marginTop: 20,
            marginBottom: 100,
          }}>
          {`${t('scan.lastUpdate')} ${lastUpdate}`}
        </Text>
      ) : null}
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 16,
  },
  recap: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  scanContainer: {
    height: '40%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 0,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  scanButtonAnchor: {
    position: 'absolute',
    top: 385,
    zIndex: 2,
  },
  title: {
    marginTop: '4%',
    textAlign: 'center',
    width: '70%',
  },
});

export default HealthScan;
