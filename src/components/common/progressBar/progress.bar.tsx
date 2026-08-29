import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export const ProgressComponent = ({
  currentIndex,
  maxElements,
  onAdvance,
  scale = 1,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxElements }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onAdvance(index)}
          style={[
            styles.circle,
            {
              marginLeft: index === 0 ? 0 : 10 * scale,
              width: styles.circle.width * scale,
              height: styles.circle.height * scale,
              borderRadius: styles.circle.borderRadius * scale,
            },
            index === currentIndex && {
              ...styles.filledCircle,
              width: styles.filledCircle.width * scale,
              height: styles.filledCircle.height * scale,
              borderRadius: styles.filledCircle.borderRadius * scale,
            },
          ]}
        />
      ))}
    </View>
  );
};

const baseScale = 1;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 20,
  },
  circle: {
    width: 10 * baseScale,
    height: 10 * baseScale,
    borderRadius: 30 * baseScale,
    backgroundColor: '#FFFFFFCC',
    marginRight: 5 * baseScale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledCircle: {
    width: 60 * baseScale,
    height: 10 * baseScale,
    borderRadius: 50 * baseScale,
    backgroundColor: '#FFFFFFCC',
  },
});
