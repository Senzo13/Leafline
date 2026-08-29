import { useSettings } from '@context/settings.context';
import Slider from '@react-native-community/slider';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import CloseButton from '../button/close.button';
import CommonButton from '../button/common.button';

interface ColorPickerProps {
  isVisible: boolean;
  onClose: () => void;
  onColorChange: (color: HsvColor) => void;
}

const CustomColorPicker: React.FC<ColorPickerProps> = ({
  isVisible,
  onClose,
  onColorChange,
}) => {
  const { theme } = useSettings();
  const { t } = useTranslation();

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View
          style={{
            ...styles.modalView,
            backgroundColor: theme.colors.primary,
          }}>
          <CloseButton handleClose={onClose} />
          <View>
            <ColorPicker
              onColorChange={onColorChange}
              style={{ width: 200, height: 200 }}
              // @ts-ignore
              sliderComponent={Slider}
              hideSliders={true}
            />
          </View>
          <CommonButton
            title={t('land.map.bottomSheet.colorSubmitButton')}
            handlePress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    position: 'relative',
    margin: 20,
    borderRadius: 10,
    padding: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default CustomColorPicker;
