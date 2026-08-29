import { useSettings } from '@context/settings.context';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BackButton = () => {
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);
  const canGoBack = navigationState.routes.length > 1;
  const currentRouteName = navigationState.routes[navigationState.index].name;
  const excludedRoutes = ['Home', 'Auth'];

  const { theme } = useSettings();

  if (!canGoBack || excludedRoutes.includes(currentRouteName)) return null;

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Icon name="arrow-back" size={30} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0,
    padding: 0
  },
});

export default BackButton;
