import { useSettings } from '@context/settings.context';
import { darkenColor, lightenColor } from '@utils/color.utils';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type SensorProgressBarProps = {
  iconName: string;
  subIconName?: string;
  percentage: number;
  color: string;
  subColor?: string;
  width?: number;
  height?: number;
  textColor?: string;
};

const SensorProgressBar: React.FC<SensorProgressBarProps> = ({
  iconName,
  subIconName,
  percentage,
  color,
  subColor,
  width = 50,
  height = 185,
  textColor,
}) => {
  const { theme } = useSettings();
  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: percentage,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [percentage, heightAnim]);

  const gradientStartColor = lightenColor(color, 50);
  const gradientEndColor = darkenColor(color, 20);

  return (
    <View style={[styles.container, { width: width }]}>
      <View
        style={[
          styles.barContainer,
          { backgroundColor: theme.colors.tertiary, height: height },
        ]}>
        <MaterialIcons
          name={iconName}
          size={24}
          color={color}
          style={styles.icon}
        />

        <Animated.View
          style={[
            styles.bar,
            {
              height: heightAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
              backgroundColor: 'red',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },
          ]}>
          <LinearGradient
            colors={[gradientEndColor, gradientStartColor]}
            style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        </Animated.View>
        <Animated.Text
          style={[
            StyleSheet.absoluteFill,
            width < 50
              ? theme.texts.textMediumUpper
              : theme.texts.textMediumUpperMedium,
            {
              textAlign: 'center',
              textAlignVertical: 'center',
              color: textColor ? textColor : theme.colors.text,
            },
          ]}>
          {`${percentage}%`}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    zIndex: 1000,
    borderRadius: 100,
  },
  subIcon: {
    position: 'absolute',
    top: 9,
    alignSelf: 'center',
    zIndex: 1001,
    elevation: 0,
    borderRadius: 100,
    // transform: 'scale(0.8)',
  },
  percentageText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  barContainer: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '100%',
  },
  percentage: {
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: 0,
    bottom: 0,
    color: '#fff',
    fontSize: 18,
    marginTop: 5, // Adjust the margin as necessary
  },
});

export default SensorProgressBar;

// utilisation:
// <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
// {/* Vous pouvez répéter le composant SensorProgressBar avec des props différents pour créer un carrousel */}
// <SensorProgressBar iconName="water-drop" percentage={65} color="#007bff" />
// {/* Ajoutez autant de SensorProgressBar que vous le souhaitez avec différentes icônes, pourcentages et couleurs */}
// {/* Exemple avec des valeurs différentes */}
// <SensorProgressBar iconName="water-drop" percentage={30} color="#ff0000" />
// <SensorProgressBar iconName="water-drop" percentage={85} color="#28a745" />
// </ScrollView>
