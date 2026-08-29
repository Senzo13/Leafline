// @ts-nocheck
import BackButton from '@components/common/button/back.button';
import { useSettings } from '@context/settings.context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface HeaderTitleProps {
  icon: string;
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ icon, title }) => {
  const { theme } = useSettings();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <BackButton />
      <View style={styles.left}>
        <MaterialCommunityIcon
          name={icon}
          size={30}
          color={theme.colors.text}
        />
        <Text style={{ ...theme.texts.subTitle, color: theme.colors.text }}>
          {title}
        </Text>
      </View>
      <MaterialIcon name="notifications" size={30} color={theme.colors.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  logo: {
    width: 35,
    height: 35,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
});

export default HeaderTitle;
