import React, { useRef, useEffect } from 'react';
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import Images from 'utils/images';
import styles from './styles';

const Splash = ({ navigation }) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Login'));
  }, [opacityAnim, navigation]);

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.bgWhite]} />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacityAnim,
          },
        ]}
      >
        <ImageBackground source={Images.background_splash} style={styles.container} />
      </Animated.View>
      <View style={styles.bgOverlay}>
        <Animated.View
          style={[
            styles.titleContainerAnimation,
            {
              opacity: opacityAnim,
              transform: [
                {
                  translateY: opacityAnim.interpolate({
                    inputRange: [0, 0.25, 1],
                    outputRange: [0, 79, 80],
                  }),
                },
              ],
            },
          ]}
        >
          <Image style={styles.icon} source={Images.icon_splash} />
          <Text style={styles.title}>scratch</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Splash;
