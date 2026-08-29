import React from 'react';
import { PanResponder, Animated } from 'react-native';

export const SwipeableContent = ({
  children,
  currentIndex,
  setCurrentIndex,
  maxElements,
}) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (event, gestureState) => {
      if (gestureState.dx > 50) {
        setCurrentIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));
      } else if (gestureState.dx < -50) {
        setCurrentIndex((prevIndex: number) =>
          Math.min(prevIndex + 1, maxElements - 1),
        );
      }
    },
  });

  return (
    <Animated.View {...panResponder.panHandlers}>{children}</Animated.View>
  );
};
