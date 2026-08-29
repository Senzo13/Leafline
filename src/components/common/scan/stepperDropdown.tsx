import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const StepperDropdown = ({
  data,
  handleSelect,
  selectedData,
  placeholder,
  theme,
}) => {
  const { t } = useTranslation();

  return selectedData ? (
    <View style={styles.analyticsContent}>
      <SelectDropdown
        data={data}
        onSelect={handleSelect}
        renderButton={(selectedItem, isOpened) => (
          <View style={styles.dropdownButton}>
            <Text style={styles.text}>{selectedItem || placeholder}</Text>
            <Icon
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              style={styles.icon}
            />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={[styles.item, isSelected && styles.selectedItem]}>
            <Text style={styles.text}>{item.toUpperCase()}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenu}
        dropdownOverlayColor="transparent"
      />
    </View>
  ) : (
    <Text style={{ color: theme.colors.gray }}>
      {t('step.selectPreviousStep')}
    </Text>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(46, 73, 69)',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#50B26C',
    borderWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  icon: {
    fontSize: 28,
    marginRight: 8,
    color: '#fff',
  },
  dropdownMenu: {
    backgroundColor: 'rgb(46, 73, 69)',
    borderRadius: 4,
    textAlign: 'center',
    marginTop: -28,
    height: 'auto',
    borderColor: '#50B26C',
    borderWidth: 1,
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  selectedItem: {
    backgroundColor: '#D2D9DF',
  },
  analyticsContent: {
    width: '100%',
    height: 'auto',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StepperDropdown;
