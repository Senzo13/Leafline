import { useSettings } from '@context/settings.context';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const CommonModal: React.FC<ModalProps> = ({ isVisible, children }) => {
  const { theme } = useSettings();

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View
          style={{
            ...styles.modalView,
            backgroundColor: theme.colors.primary,
          }}>
          {children}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    position: 'relative',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
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

export default CommonModal;
