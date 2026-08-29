// @ts-nocheck
import ButtonForm from '@components/common/button/button.form';
import CommonButton from '@components/common/button/common.button';
import EditButton from '@components/common/button/edit.button';
import MapSearchInput from '@components/common/input/map.search';
import CustomColorPicker from '@components/common/Map/color.picker';
import Map from '@components/common/Map/map';
import ZoneCreator from '@components/common/Map/zone.creator';
import CommonModal from '@components/common/modal/common.modal';
import HeaderTitle from '@components/layout/header.title';
import { useUserProfile } from '@context/profile.context';
import { useSettings } from '@context/settings.context';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { MapboxGLEvent } from '@rnmapbox/maps/lib/typescript/src/types';
import { AuthService } from '@services/api/others/auth/auth';
import { LandService } from '@services/api/others/land/land';
import { initialState, zoneReducer } from '@services/hooks/zone.reducer';
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import tinyColor from 'tinycolor2';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchFormData {
  search: string;
}

interface ZoneFormData {
  type: string;
}

interface LandMapProps {
  route: any;
  navigation: any;
}

const LandMap: React.FC<LandMapProps> = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { fieldId, fieldTypeId } = route.params;
  const { theme } = useSettings();
  const { profile, refreshProfile } = useUserProfile();
  const [plotTypes, setPlotTypes] = useState([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null); // Nouvel état pour stocker l'ID du type sélectionné

  const [state, dispatch] = useReducer(zoneReducer, initialState);
  const {
    control: controlSearch,
    handleSubmit: handleSubmitSearch,
    setValue,
  } = useForm<SearchFormData>();
  const {
    control: controlZone,
    handleSubmit: handleSubmitZone,
    formState: { errors },
  } = useForm<ZoneFormData>();
  const [searchCoordinates, setSearchCoordinates] = useState<
    [number, number] | null
  >(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const defaultCoordinates: [number, number] = [5.3749225, 43.3012113];

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      bottomSheetRef.current?.snapToIndex(1);
    });

    return () => {
      keyboardHideListener.remove();
    };
  }, []);

  const handleMapPress = useCallback(
    (e: MapboxGLEvent) => {
      const [longitude, latitude] = e.geometry.coordinates;
      dispatch({ type: 'ADD_GEOLOCATION', payload: { longitude, latitude } });
    },
    [dispatch],
  );
  const handleEditPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleColorChange = useCallback(color => {
    const rgbaColor = tinyColor(color).toRgbString();
    dispatch({ type: 'SET_ZONE_COLOR', payload: rgbaColor });
  }, []);
  const handleSearchSubmit = useCallback(async (data: SearchFormData) => {
    const location = await LandService.getLocation(data.search);
    if (location) {
      setSearchCoordinates(location);
    } else {
      console.log('Location not found');
    }
  }, []);

  const handleZoneSubmit = useCallback(
    async data => {
      if (state.currentPlot.geolocation.length > 0) {
        try {
          const plotResponse = await LandService.createPlot({
            fieldID: fieldId,
            type: data.type,
            geolocation: state.currentPlot.geolocation,
            plotTypeID: selectedTypeId,
            color: state.currentPlot.color,
          });
          dispatch({ type: 'CREATE_PLOT', payload: plotResponse.data });

          await AuthService.updateProfileField({
            fieldID: fieldId,
          });

          refreshProfile();

          dispatch({ type: 'TOGGLE_PLOT_CONFIRMATION' });
        } catch (error) {
          console.error('Failed to create plot:', error);
        }
      } else {
        console.log('No coordinates added');
      }
    },
    [state.currentPlot, fieldId, profile.fields],
  );
  const definePlotTypes = async () => {
    const currentTypes = await LandService.getTypes();
    const filterPlotType = currentTypes.data.find(
      item => item.id === fieldTypeId,
    );
    setPlotTypes(filterPlotType.plotTypes);
  };

  useEffect(() => {
    definePlotTypes();
  }, [fieldTypeId]);
  return (
    <>
      <HeaderTitle icon="map-marker-path" title={t('land.map.title')} />
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.primary,
        }}>
        <View style={styles.mapContainer}>
          <View style={styles.mapSearchContainer}>
            <MapSearchInput
              control={controlSearch}
              name="search"
              handleSubmit={handleSubmitSearch(handleSearchSubmit)}
            />
          </View>
          <Map
            styleUrl="mapbox://styles/mapbox/navigation-night-v1"
            onPress={handleMapPress}
            searchCoordinates={searchCoordinates || defaultCoordinates}>
            {state.isCreatorActive &&
              state.plots.map((plot, index) => (
                <ZoneCreator
                  key={index}
                  id={index}
                  coordinates={plot.geolocation}
                  zoneColor={plot.color}
                />
              ))}
            {state.isCreatorActive &&
              state.currentPlot.geolocation.length > 0 && (
                <ZoneCreator
                  id="current"
                  coordinates={state.currentPlot.geolocation}
                  zoneColor={state.currentPlot.color}
                />
              )}
            {/* {profile.fields &&
              profile.fields.plots.map((plot, index) => (
                <ZoneCreator
                  key={index}
                  id={index}
                  coordinates={plot.geolocation}
                  zoneColor={plot.color}
                />
              ))} */}
          </Map>
          <EditButton onPress={handleEditPress} />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={['25%', '45%']}
          backgroundStyle={{
            backgroundColor: theme.colors.primary,
          }}
          onChange={index => {
            if (index === -1) {
              dispatch({ type: 'TOGGLE_CREATOR', payload: false });
            } else {
              dispatch({ type: 'TOGGLE_CREATOR', payload: true });
            }
          }}
          enablePanDownToClose={true}
          enableContentPanningGesture={false}>
          <BottomSheetView
            style={{ paddingHorizontal: 20, gap: 4, position: 'relative' }}>
            <View>
              <Text
                style={{
                  ...theme.texts.subTitle,
                  textAlign: 'center',
                  color: theme.colors.text,
                }}>
                {t('land.map.bottomSheet.title')}
              </Text>
              <Text
                style={{
                  ...theme.texts.textSmall,
                  textAlign: 'center',
                  color: theme.colors.text,
                  marginBottom: 16,
                }}>
                {t('land.map.bottomSheet.description')}
              </Text>
            </View>
            {plotTypes && (
              <SelectDropdown
                data={plotTypes.map((type: any) => ({
                  title: type.name.toUpperCase(),
                  plotTypeID: type.id,
                }))}
                onSelect={(selectedItem, index) => {
                  setValue('type', selectedItem.title);
                  setSelectedTypeId(selectedItem.plotTypeID);
                }}
                renderButton={(selectedItem, isOpened) => {
                  return (
                    <View style={styles.dropdownButtonStyle}>
                      <Text style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem && selectedItem.title.toUpperCase()) ||
                          'Selectionner le type de parcelle'}
                      </Text>
                      <Icon
                        name={isOpened ? 'chevron-up' : 'chevron-down'}
                        style={styles.dropdownButtonArrowStyle}
                      />
                    </View>
                  );
                }}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View
                      style={{
                        ...styles.dropdownItemStyle,
                        ...(isSelected && { backgroundColor: '#D2D9DF' }),
                      }}>
                      <Text style={styles.dropdownItemTxtStyle}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
              />
            )}
            <ButtonForm
              label={t('land.map.bottomSheet.fieldColor')}
              icon="invert-colors"
              onPress={() => dispatch({ type: 'TOGGLE_COLOR_PICKER' })}
              height={50}
            />
            <CustomColorPicker
              onColorChange={handleColorChange}
              isVisible={state.colorPickerVisible}
              onClose={() => dispatch({ type: 'TOGGLE_COLOR_PICKER' })}
            />
            <CommonButton
              title={t('land.map.bottomSheet.submit')}
              handlePress={handleSubmitZone(handleZoneSubmit)}
              width={'100%'}
              height={50}
            />
            <CommonModal
              isVisible={state.isPlotConfirmationVisible}
              onClose={() => dispatch({ type: 'TOGGLE_PLOT_CONFIRMATION' })}>
              <Text
                style={{
                  ...theme.texts.textSmall,
                  color: theme.colors.text,
                  textAlign: 'center',
                  marginBottom: 16,
                }}>
                {t('land.map.modal.title')}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <CommonButton
                  title={t('land.map.modal.cancel')}
                  width={100}
                  marginRight={10}
                  backgroundColor={theme.colors.tertiary}
                  handlePress={() => {
                    dispatch({ type: 'TOGGLE_PLOT_CONFIRMATION' });
                    navigation.navigate('Home');
                  }}
                />
                <CommonButton
                  title={t('land.map.modal.confirm')}
                  width={100}
                  handlePress={() =>
                    dispatch({ type: 'TOGGLE_PLOT_CONFIRMATION' })
                  }
                />
              </View>
            </CommonModal>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    gap: 28,
    zIndex: 1,
  },
  logo: {
    width: 35,
    height: 35,
  },
  mapSearchContainer: {
    position: 'absolute',
    zIndex: 10,
    top: -25,
    left: '50%',
    transform: [{ translateX: -150 }],
  },
  mapContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 0,
    marginTop: 20,
  },
  dropdownButtonStyle: {
    width: '100%',
    height: 58,
    backgroundColor: 'rgba(46, 73, 69, 0.50)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#2E4945',
    borderWidth: 1,
    marginBottom: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
    color: '#fff',
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: 'rgb(46, 73, 69)',
    borderRadius: 4,
    marginTop: -30,
    height: 'auto',
    borderColor: '#50B26C',
    borderWidth: 1,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default LandMap;
