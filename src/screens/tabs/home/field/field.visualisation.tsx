import BackButton from '@components/common/button/back.button';
import Map from '@components/common/Map/map';
import ZoneCreator from '@components/common/Map/zone.creator';
import { useSettings } from '@context/settings.context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import { calculateFieldCentroid } from '@utils/plot.centroid';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { FieldData, PlotData } from '@types/field.types';

interface FieldVisualisationProps {
  route: any;
}

const FieldVisualisation: React.FC<FieldVisualisationProps> = ({ route }) => {
  const { theme } = useSettings();
  const { field } = route.params as { field: FieldData };
  const { t } = useTranslation();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedPlot, setSelectedPlot] = useState<PlotData | null>(null);

  const handleZonePress = plot => {
    setSelectedPlot(plot);
    bottomSheetRef.current?.expand();
  };
  const centroid = calculateFieldCentroid(field);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
      }}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.mapContainer}>
        <Map
          styleUrl="mapbox://styles/mapbox/navigation-night-v1"
          searchCoordinates={centroid}>
          {field.plots.map((plot, index) => (
            <ZoneCreator
              key={index}
              coordinates={plot.geolocation}
              zoneColor={plot.color}
              id={plot.id}
              zoneType={plot.type}
              onZonePress={() => handleZonePress(plot)}
            />
          ))}
        </Map>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['25%']}
        backgroundStyle={{ backgroundColor: theme.colors.primary }}
        enablePanDownToClose={true}
        enableHandlePanningGesture={true}
        onChange={index => {
          if (index === -1) {
            bottomSheetRef.current?.close();
          }
        }}>
        <BottomSheetView style={{ paddingHorizontal: 10, gap: 16 }}>
          <Text
            style={{
              ...theme.texts.textMedium,
              color: theme.colors.text,
              textAlign: 'center',
            }}>
            {t('plot.visualisation.title')}
          </Text>
          <View style={styles.separator} />
          {selectedPlot && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    ...theme.texts.textSmall,
                    color: theme.colors.text,
                  }}>
                  {t('plot.visualisation.type')}
                </Text>
                <Text
                  style={{
                    ...theme.texts.textSmall,
                    color: theme.colors.text,
                  }}>
                  {selectedPlot.type}
                </Text>
              </View>
              <View style={styles.separator} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    ...theme.texts.textSmall,
                    color: theme.colors.text,
                  }}>
                  {t('plot.visualisation.color')}
                </Text>
                <View
                  style={{
                    ...styles.circleColor,
                    backgroundColor: selectedPlot.color,
                  }}
                />
              </View>
            </>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 28,
    zIndex: 1,
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#2E4945',
  },
  circleColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default FieldVisualisation;
