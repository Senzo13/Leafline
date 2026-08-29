import React from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const RainDrops: React.FC = () => {
  const numberOfDrops = 30;
  const dropAnimations = React.useRef(
    new Array(numberOfDrops).fill(null).map(() => new Animated.Value(0)),
  ).current;

  const animateDrops = () => {
    const animations = dropAnimations.map((dropAnimation, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(dropAnimation, {
            toValue: 1,
            duration: Math.random() * 1500 + 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(dropAnimation, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ),
    );
    Animated.parallel(animations).start();
  };

  React.useEffect(() => {
    animateDrops();
  }, []);

  return (
    <View style={styles.container}>
      {dropAnimations.map((dropAnimation, index) => (
        <Animated.View
          key={index}
          style={[
            styles.drop,
            {
              opacity: dropAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: dropAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-50, screenHeight + 50],
                  }),
                },
                {
                  translateX: dropAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      index * (screenWidth / numberOfDrops),
                      index * (screenWidth / numberOfDrops),
                    ],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  drop: {
    position: 'absolute',
    width: 1,
    top: -screenHeight / 1.5,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: '#D8F5F6',
  },
});

export default RainDrops;
