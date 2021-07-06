import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Images from 'utils/images';

import styles from './styles';

const Background = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.backgroundContainer}
      source={Images.background_login}
    >
      <View style={styles.titleContainer}>
        <Image style={styles.icon} source={Images.icon_splash} />
        <Text style={styles.title}>scratch</Text>
      </View>
      <Text style={styles.subTitle}>Welcome Back!</Text>
    </ImageBackground>
  );
};

export default Background;
