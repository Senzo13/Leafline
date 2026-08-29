// @ts-nocheck
import BackButton from '@components/common/button/back.button';
import SearchInput from '@components/common/input/header.search';
import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderSearch: React.FC = () => {
  const { theme } = useSettings();

  return (
    <View style={{ ... styles.container, backgroundColor: theme.colors.primary }}>
      <BackButton />
      <SearchInput placeholder="Search..." />
      <Icon name="notifications" size={30} color={theme.colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 35,
    height: 35,
  },
});

export default HeaderSearch;
