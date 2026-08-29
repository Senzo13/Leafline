import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import { useSettings } from '@context/settings.context';

const Toggle = () => {
  const { theme, toggleTheme } = useSettings();
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  };

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        disabled={false}
        circleSize={30}
        barHeight={30}
        circleBorderWidth={0}
        backgroundActive={theme.colors.secondary}
        backgroundInactive={'#E5E5EA'}
        circleActiveColor={'#ffffff'}
        circleInActiveColor={'#ffffff'}
        changeValueImmediately={true}
        innerCircleStyle={styles.innerCircle}
        outerCircleStyle={styles.outerCircle}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2.15} // Adjust the padding to center the circle inside the switch
        switchRightPx={2.15} // Adjust the padding to center the circle inside the switch
        switchWidthMultiplier={2} // Adjust the width of the switch
        switchBorderRadius={16} // Adjust the border radius of the switch
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    // Style for the circle (thumb)
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent', // iOS style has no border
  },
  outerCircle: {
    // Style for the switch (track)
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
});

export default Toggle;
