import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSettings } from '@context/settings.context';
import Accordion from '@components/common/accordion/accordion';
import ScanDivider from '@components/common/divider/scanDivider';
import ClimaticMetrics from './metrics/climaticMetrics';
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

interface GeneralScanProps {
  disease: Disease[];
}

const GeneralScan: React.FC<GeneralScanProps> = ({ disease }) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <View
      style={{
        ...styles.content,
        backgroundColor: theme.colors.tertiary50,
      }}>
      <Accordion
        title={t('generalScan.climaticConditions')}
        subtitle={t('generalScan.analysisDetails')}
        expand={false}>
        <ScanDivider />
        <Text style={{ color: theme.colors.gray }}>
          {t('generalScan.summary')}:
        </Text>
        <Text style={{ color: theme.colors.text }}>
          {t('generalScan.environmentalConditions')}
        </Text>
        <View
          style={{
            height: 280,
            width: 300,
            alignSelf: 'center',
            marginTop: 25,
            marginBottom: 15,
            borderRadius: 20,
            overflow: 'hidden',
            flexWrap: 'wrap',
          }}>
          <ClimaticMetrics type="temperature" diseases={disease} />
          <ClimaticMetrics type="soilMoisture" diseases={disease} />
          <ClimaticMetrics type="airHumidity" diseases={disease} />
          <ClimaticMetrics type="luminosity" diseases={disease} />
        </View>
      </Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: '7%',
    width: '100%',
    padding: '3%',
    borderRadius: 20,
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GeneralScan;
